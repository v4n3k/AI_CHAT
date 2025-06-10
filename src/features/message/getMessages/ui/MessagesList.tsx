import { useModelStore } from '@entities/aiModel/model/store';
import type { Message } from '@entities/message/model';
import { LoadingMessageItem, MessageItem } from '@entities/message/ui';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

interface MessagesListProps {
	messages: Message[];
}

export const MessagesList = ({ messages }: MessagesListProps) => {
	const isMessageLoading = useModelStore(state => state.isMessageLoading);
	const chatId = Number(useParams().id);

	const scrollRef = useRef<HTMLDivElement>(null);
	const isFirstRender = useRef(true);

	useEffect(() => {
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
				{isMessageLoading && messages?.at(-1)?.chatId === chatId && (
					<LoadingMessageItem />
				)}
			</ul>
			<div ref={scrollRef} />
		</div>
	);
};
