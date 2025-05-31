import { useSignIn } from '@features/auth/signIn/model';
import { useSignUp } from '@features/auth/signUp/model';
import { SignUpForm } from '@features/auth/signUp/ui';
import { useEffect } from 'react';

export const SignUpWidget = () => {
	const { credentials, setCredentials, signUp, isSuccess } = useSignUp();
	const { signIn } = useSignIn();

	useEffect(() => {
		if (isSuccess) {
			signIn(credentials);
		}
	}, [isSuccess]);

	return (
		<SignUpForm
			credentials={credentials}
			setCredentials={setCredentials}
			onSubmit={signUp}
		/>
	);
};
