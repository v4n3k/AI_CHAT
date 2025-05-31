import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { signUp } from '../api';

export const useSignUp = () => {
	const [credentials, setCredentials] = useState({
		login: '',
		password: '',
	});

	const mutation = useMutation({
		mutationFn: () => signUp(credentials),
	});

	return { credentials, setCredentials, signUp: mutation.mutate, ...mutation };
};
