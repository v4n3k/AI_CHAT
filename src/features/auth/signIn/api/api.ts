import { Axios, handleApiResponse } from '@shared/api';
import type { SignInCredentials, SignInResponse } from '../model';

export const signIn = async (
	credentials: SignInCredentials
): Promise<SignInResponse> => {
	return await handleApiResponse(Axios.post('/auth/sign_in', credentials));
};
