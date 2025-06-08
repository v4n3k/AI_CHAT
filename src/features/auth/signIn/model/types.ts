export interface SignInCredentials {
	login: string;
	password: string;
}

export interface SignInResponse {
	message: string;
	userId: number;
	login: string;
}
