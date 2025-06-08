import { ROUTE_PATHS } from '@app/routes';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../api';

export const useSignOut = () => {
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: signOut,

		onSuccess: () => {
			localStorage.removeItem('userId');
			localStorage.removeItem('login');

			navigate(ROUTE_PATHS.SIGN_IN);
		},
	});

	return { signOut: () => mutation.mutate(), ...mutation };
};
