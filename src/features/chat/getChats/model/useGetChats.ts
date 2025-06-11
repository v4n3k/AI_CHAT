import { getChatsByUserId } from '@entities/chat/api';
import { useUserData } from '@entities/user/model';
import { useQuery } from '@tanstack/react-query';

export const useGetChats = () => {
	const { userId } = useUserData();

	const query = useQuery({
		queryKey: ['chats'],
		queryFn: () => {
			if (userId) {
				return getChatsByUserId(userId);
			}
		},
	});

	return { chats: query.data, ...query };
};
