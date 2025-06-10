import { ROUTE_PATHS } from '@app/routes';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api';
import type { SignInCredentials } from './types';
import { toast } from 'react-toastify';

export const useSignIn = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		login: '',
		password: '',
	});

	const mutation = useMutation({
		mutationFn: (credentials: SignInCredentials) => signIn(credentials),

		onSuccess: data => {
			localStorage.setItem('userId', data.userId.toString());
			localStorage.setItem('login', data.login);

			setCredentials({ login: '', password: '' });

			navigate(ROUTE_PATHS.HOME);

			toast.success('You have been signed in successfully!');
		},

		onError: () => {
			toast.error('Error signing in');
		},
	});

	return { credentials, setCredentials, signIn: mutation.mutate, ...mutation };
};
