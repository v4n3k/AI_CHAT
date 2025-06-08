import type { Message } from '@entities/message/model';
import { MessageItem } from '@entities/message/ui';
import { useEffect, useRef } from 'react';

interface MessagesListProps {
	messages: Message[];
}

export const MessagesList = ({ messages }: MessagesListProps) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const isFirstRender = useRef(true);

	useEffect(() => {
		console.log('render');

		const scrollToBottom = () => {
			if (scrollRef.current) {
				scrollRef.current.scrollIntoView({
					behavior: isFirstRender.current ? 'instant' : 'smooth',
				});
			}
		};

		const timeoutId = setTimeout(() => {
			scrollToBottom();
			isFirstRender.current = false;
		}, 0);

		return () => clearTimeout(timeoutId);
	}, [messages.length]);

	return (
		<div className='flex flex-col gap-2 w-full h-[calc(100vh-80px)] overflow-y-auto scrollbar-none'>
			<ul className='flex flex-col gap-2 w-full'>
				{messages?.map(message => (
					<MessageItem key={message.id} {...message} />
				))}
			</ul>
			<div ref={scrollRef} />
		</div>
	);
};
