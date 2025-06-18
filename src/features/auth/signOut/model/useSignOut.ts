import { PATH_GENERATORS } from '@app/routes';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signOut } from '../api';

export const useSignOut = () => {
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: signOut,

		onSuccess: () => {
			localStorage.removeItem('userId');
			localStorage.removeItem('login');

			navigate(PATH_GENERATORS.signIn());

			toast.success('You have been signed out successfully!');
		},

		onError: () => {
			toast.error('Error signing out');
		},
	});

	return { signOut: () => mutation.mutate(), ...mutation };
};
