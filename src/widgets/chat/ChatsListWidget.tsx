import { useCreateChat } from '@features/chat/createChat/model';
import { CreateChatModal } from '@features/chat/createChat/ui';
import { useGetChats } from '@features/chat/getChats/model';
import { ChatsList } from '@features/chat/getChats/ui';
import { Button } from '@shared/ui';
import { useState } from 'react';

export const ChatsListWidget = () => {
	const { chats } = useGetChats();
	const { createChat } = useCreateChat();
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div className='flex flex-col gap-2 w-1/4 h-[calc(100vh-80px)]'>
			<Button variant='outlined' onClick={handleOpen}>
				+
			</Button>
			<ChatsList chats={chats} />
			<CreateChatModal
				isOpen={isOpen}
				onClose={handleClose}
				onCreate={createChat}
			/>
		</div>
	);
};
