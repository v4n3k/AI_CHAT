import { ROUTE_PATHS } from '@app/routes';
import { Button, Link } from '@shared/ui';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();

	const login = 'login';
	const isAuth = true;

	return (
		<header className='sticky top-0 bg-slate-800 py-4'>
			<div className='flex items-center justify-between max-w-6xl mx-auto'>
				<Link
					className='text-2xl font-bold'
					color='primary'
					to={ROUTE_PATHS.HOME}
				>
					AI Chat
				</Link>
				{isAuth ? (
					<div className='flex items-center gap-4'>
						<span className='text-white text-lg font-semibold'>{login}</span>
						<Button variant='outlined'>Sign out</Button>
					</div>
				) : (
					<Button onClick={() => navigate(ROUTE_PATHS.SIGN_IN)}>Sign in</Button>
				)}
			</div>
		</header>
	);
};
