import { getMessagesByChatId } from '@entities/message/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useGetMessages = () => {
	const chatId = Number(useParams().id);

	const query = useQuery({
		queryKey: ['messages', chatId],
		queryFn: () => getMessagesByChatId(chatId),
	});

	return { messages: query.data, ...query };
};
