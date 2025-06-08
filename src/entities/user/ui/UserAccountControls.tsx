import { Button } from '@shared/ui';

interface UserAccountControlsProps {
	login: string;
	signOut: () => void;
}

export const UserAccountControls = ({
	login,
	signOut,
}: UserAccountControlsProps) => {
	return (
		<div className='flex items-center gap-4'>
			<span className='text-white text-lg font-semibold'>{login}</span>
			<Button variant='outlined' onClick={signOut}>
				Sign out
			</Button>
		</div>
	);
};
