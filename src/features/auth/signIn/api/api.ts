import { Axios, handleApiResponse } from '@shared/api';
import type { SignInCredentials } from '../model';

export const signIn = async (credentials: SignInCredentials) => {
	return await handleApiResponse(Axios.post('/auth/sign_in', credentials));
};
