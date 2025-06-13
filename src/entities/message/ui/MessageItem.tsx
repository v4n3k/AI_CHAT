import type { Message } from '@entities/message/model';
import clsx from 'clsx';

const classNames = {
	model: 'bg-sky-600 text-slate-300 mr-auto',
	user: 'bg-slate-500 text-slate-900 ml-auto',
	error: 'bg-red-500',
};

export const MessageItem = ({
	from,
	content,
}: Pick<Message, 'from' | 'content'>) => {
	return (
		<li
			className={clsx(
				'flex max-w-3/4 w-fit py-2 px-3 rounded-xl text-lg',
				classNames[from]
			)}
		>
			<p>{content}</p>
		</li>
	);
};
