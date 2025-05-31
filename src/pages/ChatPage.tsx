import { SendMessageWidget } from '@widgets/index';
import { MessagesListWidget } from '@widgets/message/MessagesListWidget';

export const ChatPage = () => {
	return (
		<>
			<MessagesListWidget />
			<SendMessageWidget />
		</>
	);
};
