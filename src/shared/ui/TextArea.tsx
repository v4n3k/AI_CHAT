import clsx from 'clsx';
import type { ComponentProps } from 'react';

interface TextAreaProps extends ComponentProps<'textarea'> {
	className?: string;
}

export const TextArea = ({ className, ...props }: TextAreaProps) => {
	return (
		<textarea
			rows={1}
			{...props}
			className={clsx(
				className,
				'bg-slate-700 border-2 text-white text-lg p-2 border-slate-500 rounded-lg w-full resize-none outline-none '
			)}
		/>
	);
};
