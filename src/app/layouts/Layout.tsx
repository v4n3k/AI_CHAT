import { Header } from '@widgets/Header';
import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const {pathname} = useLocation();
	const isAuthPage = pathname.includes('sign');

	return (
		<div className='flex flex-col w-full min-h-screen h-full bg-slate-800'>
			{!isAuthPage && <Header />}
			<main className='flex flex-col w-full max-w-6xl h-full mx-auto px-4'>
				{children}
			</main>
		</div>   
	)
}
