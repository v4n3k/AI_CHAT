import { ROUTE_PATHS } from '@app/routes';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api';
import type { SignInCredentials } from './types';

export const useSignIn = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		login: '',
		password: '',
	});

	const mutation = useMutation({
		mutationFn: (credentials: SignInCredentials) => signIn(credentials),

		onSuccess: () => {
			setCredentials({ login: '', password: '' });
			navigate(ROUTE_PATHS.HOME);
		},
	});

	return { credentials, setCredentials, signIn: mutation.mutate, ...mutation };
};
