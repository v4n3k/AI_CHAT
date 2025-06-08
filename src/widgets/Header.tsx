import { ROUTE_PATHS } from '@app/routes';
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
		navigate(ROUTE_PATHS.SIGN_IN);
	};

	return (
		<header className='sticky top-0 bg-slate-800 p-4'>
			<div className='flex items-center justify-between max-w-6xl mx-auto'>
				<Link
					className='text-2xl font-bold'
					color='primary'
					to={ROUTE_PATHS.HOME}
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
