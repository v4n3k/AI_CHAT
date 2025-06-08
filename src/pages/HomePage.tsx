import { ROUTE_PATHS } from '@app/routes';
import { useUserData } from '@entities/user/model';
import { useGetChats } from '@features/chat/getChats/model';
import { Button, Title } from '@shared/ui';
import { AiModelsListWidget } from '@widgets/index';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
	const navigate = useNavigate();
	const { isAuth } = useUserData();
	const { chats } = useGetChats();

	const handleClick = () => {
		navigate(ROUTE_PATHS.CHAT.replace(':id', '1'));
	};

	return (
		<>
			<Title as='h1' className='text-slate-400'>
				Unlock the Power of AI: Chat with the Best Models
			</Title>
			<AiModelsListWidget />

			{isAuth && (
				<Button className='px-10 mx-auto mb-6' onClick={handleClick}>
					{chats.length <= 0 ? 'Explore AI Models' : 'My chats'}
				</Button>
			)}
		</>
	);
};
