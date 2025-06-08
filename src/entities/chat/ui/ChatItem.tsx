import type { Message } from '@entities/message/model';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import type { Chat } from '../model';

const contentClassNames: Record<Message['from'], string> = {
	user: 'text-slate-500',
	model: 'text-sky-500',
};

export const ChatItem = ({ id, modelName, lastMessage }: Chat) => {
	const selectedChatId = useParams().id;

	const isSelected = selectedChatId === id.toString();

	return (
		<li
			className={clsx(
				`
        border border-slate-600
        rounded-xl
        shadow-lg
        hover:shadow-xl
        hover:opacity-70
        transition-all duration-300
        p-5
        flex flex-col gap-3
        cursor-pointer
        text-slate-200
      `,
				isSelected && 'bg-slate-700'
			)}
		>
			<h3
				className='
        text-lg
        font-semibold
        text-white
        mb-1
      '
			>
				{modelName}
			</h3>

			{lastMessage ? (
				<p
					className={clsx(
						`
            text-sm
            line-clamp-2
            overflow-hidden
          `,
						contentClassNames[lastMessage.from]
					)}
				>
					{lastMessage.content}
				</p>
			) : (
				<p
					className='
          text-slate-500
          text-sm
          italic
        '
				>
					No messages yet. Start a conversation!
				</p>
			)}
		</li>
	);
};
