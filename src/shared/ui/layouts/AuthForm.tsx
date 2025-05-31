import { ROUTE_PATHS } from '@app/routes/routes';
import type { SignInCredentials } from '@features/auth/signIn/model';
import type { SignUpCredentials } from '@features/auth/signUp/model';
import { Button } from '../Button';
import { Link } from '../Link';
import { TextField } from '../TextField';

interface AuthFormProps<T> {
	credentials: SignUpCredentials;
	setCredentials: React.Dispatch<React.SetStateAction<SignUpCredentials>>;
	action: 'Sign up' | 'Sign in';
	onSubmit: (credentials?: T) => void;
}

export const AuthForm = <T,>({
	credentials,
	setCredentials,
	action,
	onSubmit,
}: AuthFormProps<
	T extends SignUpCredentials ? SignUpCredentials : SignInCredentials
>) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(credentials);
	};

	const { login, password } = credentials;

	const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({ ...credentials, login: e.target.value });
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({ ...credentials, password: e.target.value });
	};

	return (
		<form
			className='flex flex-col gap-4 w-full max-w-lg mx-auto border border-slate-500 rounded-xl p-10'
			onSubmit={handleSubmit}
		>
			<h2 className='text-white text-2xl text-center'>Auth</h2>
			<TextField
				placeholder='Email'
				value={login}
				onChange={handleLoginChange}
			/>
			<TextField
				placeholder='Password'
				type='password'
				value={password}
				onChange={handlePasswordChange}
			/>
			<Button type='submit'>{action}</Button>
			<Link
				className='ml-auto'
				to={action === 'Sign up' ? ROUTE_PATHS.SIGN_IN : ROUTE_PATHS.SIGN_UP}
			>
				{action === 'Sign up' ? 'Sign in' : 'Sign up'}
			</Link>
		</form>
	);
};
