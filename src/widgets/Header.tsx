import { PATH_GENERATORS } from '@app/routes';
import { useUserData } from '@entities/user/model';
import { UserAccountControls } from '@entities/user/ui';
import { useSignOut } from '@features/auth/signOut/model';
import { Button, Link } from '@shared/ui';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();
	const { userId, login } = useUserData();
	const { signOut } = useSignOut();

	const isAuth = userId && login;

	const handleSignInClick = () => {
		navigate(PATH_GENERATORS.signIn());
	};

	return (
		<header className='sticky top-0 bg-slate-800 p-4'>
			<div className='flex items-center justify-between max-w-6xl mx-auto px-4'>
				<Link
					className='text-2xl font-bold'
					color='primary'
					to={PATH_GENERATORS.home()}
				>
					AI Chat
				</Link>

				{isAuth ? (
					<UserAccountControls login={login} signOut={signOut} />
				) : (
					<Button onClick={handleSignInClick}>Sign in</Button>
				)}
			</div>
		</header>
	);
};
