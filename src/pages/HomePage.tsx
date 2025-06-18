import { PATH_GENERATORS } from '@app/routes';
import { models } from '@entities/aiModel/data';
import type { Chat } from '@entities/chat/model';
import { useUserData } from '@entities/user/model';
import { useCreateChat } from '@features/chat/createChat/model';
import { useGetChats } from '@features/chat/getChats/model';
import { Button, Title } from '@shared/ui';
import { useQueryClient } from '@tanstack/react-query';
import { AiModelsListWidget } from '@widgets/index';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { isAuth } = useUserData();
	const { chats } = useGetChats();
	const { createChatAsync } = useCreateChat();

	const handleClick = async () => {
		try {
			if (!chats.length) {
				await createChatAsync({
					model: models[0].value,
					shortModel: models[0].label,
				});
				await queryClient.invalidateQueries({ queryKey: ['chats'] });

				const updatedChats = queryClient.getQueryData<Chat[]>(['chats']);

				if (updatedChats && updatedChats.length > 0) {
					navigate(PATH_GENERATORS.chat(updatedChats[0].id.toString()));
				} else {
					console.error('Failed to create chat or retrieve updated chats');
				}
			} else {
				navigate(PATH_GENERATORS.chat(chats[0].id));
			}
		} catch (error) {
			console.error('Error creating or navigating to chat:', error);
		}
	};

	return (
		<>
			<Title as='h1' className='text-slate-400'>
				Unlock the Power of AI: Chat with the Best Models
			</Title>
			<AiModelsListWidget />

			{isAuth && (
				<Button className='px-10 mx-auto mb-6' onClick={handleClick}>
					{chats?.length <= 0 ? 'Explore AI Models' : 'My chats'}
				</Button>
			)}
		</>
	);
};
