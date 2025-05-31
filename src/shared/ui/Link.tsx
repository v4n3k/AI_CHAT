import clsx from 'clsx';
import React from 'react';
import { Link as RRDLink } from 'react-router-dom';

interface LinkProps extends React.ComponentProps<typeof RRDLink> {}

export const Link = ({ className, ...props }: LinkProps) => {
	return (
		<RRDLink
			{...props}
			className={clsx(className, 'text-sky-500 px-2 hover:text-sky-400')}
		/>
	);
};
