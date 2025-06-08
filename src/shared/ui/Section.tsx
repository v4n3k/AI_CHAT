import clsx from 'clsx';
import { type ComponentProps, type ReactNode } from 'react';

interface SectionProps extends ComponentProps<'section'> {
	children: ReactNode;
}

export const Section = ({ className, children }: SectionProps) => {
	return (
		<section className={clsx(className, 'mb-10')}>{children}</section>
	)
}
