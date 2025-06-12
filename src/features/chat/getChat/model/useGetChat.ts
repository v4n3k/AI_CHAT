import { getChatById } from '@entities/chat/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useGetChat = () => {
	const chatId = Number(useParams().id);

	const query = useQuery({
		queryKey: ['chat', chatId],
		queryFn: () => getChatById(chatId),
	});

	return { chat: query.data, ...query };
};
