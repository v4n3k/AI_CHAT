import type { UserId } from '@entities/user/model';
import { Axios, handleApiResponse } from '@shared/api';
import type { Chat } from '../model';

export const getChatsByUserId = async (userId: UserId) => {
	return await handleApiResponse(Axios.get(`/chats/${userId}`));
};

export const getChatById = async (id: number) => {
	return await handleApiResponse(Axios.get(`/chat/${id}`));
};

export const createChat = async ({
	userId,
	model,
}: Pick<Chat, 'userId' | 'model'>) => {
	return await handleApiResponse(Axios.post('/chats', { userId, model }));
};
