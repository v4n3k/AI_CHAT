import { Axios, handleApiResponse } from '@shared/api';

export const signOut = async () => {
	return await handleApiResponse(Axios.post('/auth/sign_out'));
};
