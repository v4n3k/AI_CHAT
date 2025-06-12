import { createChatCompletion } from '@entities/aiModel/api';
import type { CreateChatCompletionParams } from '@entities/aiModel/model';
import { getChatById } from '@entities/chat/api';
import type { Chat } from '@entities/chat/model';
import { saveMessage } from '@entities/message/api';
import type { Message } from '@entities/message/model';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

export const useSendMessage = () => {
	const queryClient = useQueryClient();
	const chatId = Number(useParams().id);

	const [messageContent, setMessageContent] = useState('');

	const { data: chat } = useQuery<Chat>({
		queryKey: ['chat', chatId],
		queryFn: () => getChatById(chatId),
	});

	useEffect(() => {
		console.log(chat);
	}, [chat, messageContent]);

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
			queryClient.invalidateQueries({ queryKey: ['chats'] });
		},

		onError: (_, __, context) => {
			if (context?.previousMessages) {
				queryClient.setQueryData<Message[]>(
					['messages', chatId],
					context.previousMessages
				);
			}

			toast.error('Error saving message');
		},
	});

	const aiMutation = useMutation({
		mutationFn: ({ model, content }: CreateChatCompletionParams) => {
			return createChatCompletion({ model, content });
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

			toast.error('Error getting AI response');
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

		aiMutation.mutate({
			model: chat?.model ?? '',
			content: userMessage.content,
		});
	};

	return {
		message: messageContent,
		setMessage: setMessageContent,
		sendMessage,
		isLoading: saveMutation.isPending || aiMutation.isPending,
		isError: saveMutation.isError || aiMutation.isError,
	};
};
