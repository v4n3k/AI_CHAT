import clsx from 'clsx';
import type { ReactNode } from 'react';

interface TitleProps {
	className?: string;
	children: ReactNode;
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const classNames = {
	h1: 'text-6xl font-bold mb-8',
	h2: 'text-2xl font-bold mb-4',
	h3: 'text-xl font-semibold mb-4',
	h4: 'text-lg font-semibold mb-4',
	h5: 'text-base font-semibold mb-4',
	h6: 'text-base font-semibold mb-4',
};

export const Title = ({ className, children, as }: TitleProps) => {
	const Tag = as;

	return <Tag className={clsx(className, classNames[as])}>{children}</Tag>;
};
