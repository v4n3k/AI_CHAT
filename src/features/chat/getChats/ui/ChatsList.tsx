import type { Chat } from '@entities/chat/model';
import { ChatItem } from '@entities/chat/ui';

interface ChatsListProps {
	chats: Chat[];
}

export const ChatsList = ({ chats }: ChatsListProps) => {
	return (
		<>
			<ul className='flex flex-col gap-2 max-w-1/4 w-full h-[calc(100%-16px)] overflow-y-auto scrollbar-none'>
				{chats?.map(chat => (
					<ChatItem key={chat.id} {...chat} />
				))}
			</ul>
		</>
	);
};
