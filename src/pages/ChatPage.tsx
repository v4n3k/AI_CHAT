import { ChatsListWidget } from '@widgets/chat/ChatsListWidget';
import { MessagesListWidget, SendMessageWidget } from '@widgets/index';

export const ChatPage = () => {
	return (
		<div className='flex gap-4 h-[calc(100vh-80px)]'>
			<div className='w-1/4'>
				<ChatsListWidget />
			</div>

			<div className='flex flex-col gap-2 w-full h-[calc(100vh-80px)]'>
				<MessagesListWidget />
				<SendMessageWidget />
			</div>
		</div>
	);
};
