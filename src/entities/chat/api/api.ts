import type { UserId } from '@entities/user/model';
import { Axios, handleApiResponse } from '@shared/api';
import type { Chat } from '../model';

export const getChatsByUserId = async (userId: UserId) => {
	return await handleApiResponse(Axios.get(`/chats/${userId}`));
};

export const createChat = async ({
	userId,
	modelName,
}: Pick<Chat, 'userId' | 'modelName'>) => {
	return await handleApiResponse(Axios.post('/chats', { userId, modelName }));
};
