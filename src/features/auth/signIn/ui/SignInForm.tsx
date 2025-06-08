import { AuthForm } from '@shared/ui/layouts';
import type { SignInCredentials } from '../model';

interface SignInFormProps {
	credentials: SignInCredentials;
	setCredentials: React.Dispatch<React.SetStateAction<SignInCredentials>>;
	onSubmit: (credentials: SignInCredentials) => void;
}

export const SignInForm = ({
	credentials,
	setCredentials,
	onSubmit,
}: SignInFormProps) => {
	return (
		<AuthForm
			action='Sign in'
			credentials={credentials}
			setCredentials={setCredentials}
			onSubmit={() => onSubmit(credentials)}
		/>
	);
};
