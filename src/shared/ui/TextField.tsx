import clsx from 'clsx';
import { type ComponentProps } from 'react';

interface TextFieldProps extends ComponentProps<'input'> {
	className?: string
}

export const TextField = ({ className, ...props }: TextFieldProps) => {
	return (
		<input {...props} className={clsx(className, 'bg-slate-700 border-2 text-white text-lg p-2 border-slate-500 rounded-lg w-full outline-none')} />
	)
}
