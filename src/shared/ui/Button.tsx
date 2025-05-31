import clsx from 'clsx';
import { type ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
	className?: string;
}

export const Button = ({ className, ...props }: ButtonProps) => {
	return (
	<button {...props} className={clsx(className, 'bg-sky-500 text-white text-xl p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-sky-400')} />
	)
}
