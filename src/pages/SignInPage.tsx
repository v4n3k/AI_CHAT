import { SignInWidget } from '@widgets/auth/SignInWidget';

export const SignInPage = () => {
	return (
		<div className='flex flex-col justify-center w-full h-screen bg-slate-800'>
			<SignInWidget />
		</div>
	);
};
