import { useGetMessages } from '@features/message/getMessages/model';
import { MessagesList } from '@features/message/getMessages/ui';

export const MessagesListWidget = () => {
	const { messages } = useGetMessages();

	if (!messages) return;

	return <MessagesList messages={messages} />;
};
