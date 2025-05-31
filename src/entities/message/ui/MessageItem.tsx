import type { Message } from '@entities/model/types';

export const MessageItem = ({ from, content }: Message) => {
	const fromStyles = {
		model: 'bg-sky-500 mr-auto',
		user: 'bg-slate-500 ml-auto',
		error: 'bg-red-500',
	};

	return (
		<li
			className={`flex max-w-3/4 w-fit py-2 px-3 rounded-lg text-lg ${fromStyles[from]}`}
		>
			<p>{content}</p>
		</li>
	);
};
