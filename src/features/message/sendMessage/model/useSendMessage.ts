import { saveMessage } from '@entities/message/api';
import { createChatCompletion } from '@entities/model/api';
import type { Message } from '@entities/model/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const useSendMessage = () => {
	const queryClient = useQueryClient();
	const { id } = useParams();
	const chatId = Number(id);
	const [messageContent, setMessageContent] = useState('');

	const saveMutation = useMutation({
		mutationFn: (message: Message) => {
			return saveMessage(message);
		},

		onMutate: async (newMessage: Message) => {
			await queryClient.cancelQueries({ queryKey: ['messages', chatId] });

			const previousMessages = queryClient.getQueryData<Message[]>([
				'messages',
				chatId,
			]);

			queryClient.setQueryData<Message[]>(['messages', chatId], old => {
				const currentMessages = old || [];
				const newMessages = [...currentMessages, newMessage];
				return newMessages;
			});
			return { previousMessages };
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['messages', chatId] });
		},

		onError: (_, __, context) => {
			if (context?.previousMessages) {
				queryClient.setQueryData<Message[]>(
					['messages', chatId],
					context.previousMessages
				);
			}
		},
	});

	const aiMutation = useMutation({
		mutationFn: (userMessageContent: string) => {
			return createChatCompletion(userMessageContent);
		},

		onSuccess: data => {
			if (!data) return;
			const modelMessage: Message = {
				id: uuidv4(),
				chatId,
				from: 'model',
				content: String(data.choices[0].message.content),
			};
			saveMutation.mutate(modelMessage);
		},

		onError: error => {
			console.error('aiMutation - onError: Failed to get AI response:', error);
		},
	});

	const sendMessage = () => {
		if (!messageContent.trim()) return;

		const userMessage: Message = {
			id: uuidv4(),
			chatId,
			from: 'user',
			content: messageContent,
		};
		setMessageContent('');

		saveMutation.mutate(userMessage);
		aiMutation.mutate(userMessage.content);
	};

	return {
		message: messageContent,
		setMessage: setMessageContent,
		sendMessage,
		isLoading: saveMutation.isPending || aiMutation.isPending,
		isError: saveMutation.isError || aiMutation.isError,
	};
};
