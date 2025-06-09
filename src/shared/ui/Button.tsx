import clsx from 'clsx';
import { type ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
	className?: string;
	variant?: 'primary' | 'outlined' | 'danger';
	
}
	
const classNames = {
	primary: 'text-white bg-sky-500 hover:bg-sky-400',
	outlined: 'text-white border-2 border-sky-500 hover:border-sky-400',
	danger: 'text-white bg-red-500 hover:bg-red-400',
}

export const Button = ({ className, variant = 'primary', ...props }: ButtonProps) => {


	return (
	<button {...props} className={clsx(className, classNames[variant], ' text-xl p-2 px-3 rounded-lg cursor-pointer transition-colors duration-200')} />
	)
}
