import { ROUTE_PATHS } from '@app/routes';
import { Button, Title } from '@shared/ui';
import { AiModelsListWidget } from '@widgets/index';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
	const navigate = useNavigate();
	const chats = [];

	return (
		<>
			<Title as='h1' className='text-slate-400'>
				Unlock the Power of AI: Chat with the Best Models
			</Title>
			<AiModelsListWidget />
			<Button
				className='px-10 mx-auto mb-6'
				onClick={() => navigate(ROUTE_PATHS.CHAT.replace(':id', '1'))}
			>
				{chats.length <= 0 ? 'Explore AI Models' : 'My chats'}
			</Button>
		</>
	);
};
