import clsx from 'clsx';
import React from 'react';
import { Link as RRDLink } from 'react-router-dom';

interface LinkProps extends React.ComponentProps<typeof RRDLink> {
	color?: 'accent' | 'primary';
}

const classNames = {
	accent: 'text-sky-500 hover:text-sky-400',
	primary: 'text-white hover:text-slate-200',
};

export const Link = ({ color = 'accent', className, ...props }: LinkProps) => {
	return (
		<RRDLink
			{...props}
			className={clsx(className, classNames[color], 'px-2 duration-200')}
		/>
	);
};
