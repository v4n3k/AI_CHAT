import { createChat } from '@entities/chat/api';
import { useUserData } from '@entities/user/model';
import { useMutation } from '@tanstack/react-query';

export const useCreateChat = () => {
	const { userId } = useUserData();

	const mutation = useMutation({
		mutationFn: (modelName: string) => createChat({ userId, modelName }),
	});

	return {
		createChat: mutation.mutate,
		...mutation,
	};
};
