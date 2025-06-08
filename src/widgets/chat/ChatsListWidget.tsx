import { useGetChats } from '@features/chat/getChats/model';
import { ChatsList } from '@features/chat/getChats/ui';

export const ChatsListWidget = () => {
	const { chats } = useGetChats();

	return <ChatsList chats={chats} />;
};
