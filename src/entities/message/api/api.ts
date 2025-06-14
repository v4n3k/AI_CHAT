import type { Message } from '@entities/message/model';
import { Axios, handleApiResponse } from '@shared/api';

export const getMessagesByChatId = async (
	chatId: string | number
): Promise<Message[]> => {
	return await handleApiResponse(Axios.get(`/messages/${chatId}`));
};

export const saveMessage = async ({
	chatId,
	from,
	content,
}: Omit<Message, 'id'>) => {
	return await handleApiResponse(
		Axios.post('/messages', { chatId, from, content })
	);
};
