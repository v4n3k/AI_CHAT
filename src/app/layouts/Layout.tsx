import { type ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
	return (
		<div className='flex flex-col w-full h-screen bg-slate-800'>
			<main className='flex flex-col w-full max-w-4xl h-full mx-auto p-4'>
			{children}
			</main>
		</div>   
	)
}
