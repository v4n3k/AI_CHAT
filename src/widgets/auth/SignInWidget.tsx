import { useSignIn } from '@features/auth/signIn/model';
import { SignInForm } from '@features/auth/signIn/ui/SignInForm';

export const SignInWidget = () => {
	const { credentials, setCredentials, signIn } = useSignIn();

	return (
		<SignInForm
			credentials={credentials}
			setCredentials={setCredentials}
			onSubmit={credentials => signIn(credentials)}
		/>
	);
};
