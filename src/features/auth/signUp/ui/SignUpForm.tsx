import { AuthForm } from '@shared/ui/layouts';
import type { SignUpCredentials } from '../model';

interface SignUpFormProps {
	credentials: SignUpCredentials;
	setCredentials: React.Dispatch<React.SetStateAction<SignUpCredentials>>;
	onSubmit: () => void;
}

export const SignUpForm = ({
	credentials,
	setCredentials,
	onSubmit,
}: SignUpFormProps) => {
	return (
		<AuthForm
			action='Sign up'
			credentials={credentials}
			setCredentials={setCredentials}
			onSubmit={onSubmit}
		/>
	);
};
