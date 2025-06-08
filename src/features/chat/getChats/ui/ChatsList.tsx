import type { Chat } from '@entities/chat/model';
import { ChatItem } from '@entities/chat/ui';

interface ChatsListProps {
	chats: Chat[];
}

export const ChatsList = ({ chats }: ChatsListProps) => {
	return (
		<aside>
			<ul className='flex flex-col gap-2 w-full'>
				{chats?.map(chat => (
					<ChatItem key={chat.id} {...chat} />
				))}
			</ul>
		</aside>
	);
};
