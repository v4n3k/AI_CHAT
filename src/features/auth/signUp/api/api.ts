import { Axios, handleApiResponse } from '@shared/api';
import type { SignUpCredentials } from '../model';

export const signUp = async (credentials: SignUpCredentials) => {
	return await handleApiResponse(Axios.post('/auth/sign_up', credentials));
};
