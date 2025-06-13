import { createChat } from '@entities/chat/api';
import type { Chat } from '@entities/chat/model';
import { useUserData } from '@entities/user/model';
import { useMutation } from '@tanstack/react-query';

export const useCreateChat = () => {
	const { userId } = useUserData();

	const mutation = useMutation({
		mutationFn: ({ model, shortModel }: Pick<Chat, 'model' | 'shortModel'>) =>
			createChat({ userId, model, shortModel }),
	});

	return {
		createChat: mutation.mutate,
		createChatAsync: mutation.mutateAsync,
		...mutation,
	};
};
