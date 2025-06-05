import type { Message } from '@entities/aiModel/types';

export const MessageItem = ({ from, content }: Message) => {
	const fromStyles = {
		model: 'bg-sky-600 text-slate-900 mr-auto',
		user: 'bg-slate-500 text-slate-900 ml-auto',
		error: 'bg-red-500',
	};

	return (
		<li
			className={`flex max-w-3/4 w-fit py-2 px-3 rounded-xl text-lg ${fromStyles[from]}`}
		>
			<p>{content}</p>
		</li>
	);
};
