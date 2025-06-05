import type { Message } from '@entities/aiModel/types';
import { MessageItem } from '@entities/message/ui';

interface MessagesListProps {
	messages: Message[];
}

export const MessagesList = ({ messages }: MessagesListProps) => {
	return (
		<ul className='flex flex-col gap-2'>
			{messages?.map(message => (
				<MessageItem key={message.id} {...message} />
			))}
		</ul>
	);
};
