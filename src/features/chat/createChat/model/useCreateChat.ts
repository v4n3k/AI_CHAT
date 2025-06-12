import { createChat } from '@entities/chat/api';
import { useUserData } from '@entities/user/model';
import { useMutation } from '@tanstack/react-query';

export const useCreateChat = () => {
	const { userId } = useUserData();

	const mutation = useMutation({
		mutationFn: (model: string) => createChat({ userId, model }),
	});

	return {
		createChat: mutation.mutate,
		createChatAsync: mutation.mutateAsync,
		...mutation,
	};
};
