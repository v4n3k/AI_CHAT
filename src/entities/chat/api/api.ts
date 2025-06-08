import { Axios, handleApiResponse } from '@shared/api';

export const getChatsByUserId = async (userId: string) => {
	return await handleApiResponse(Axios.get(`/chats/${userId}`));
};
