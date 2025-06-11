import clsx from 'clsx';
import type { MouseEvent, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const firstFocusableElement = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);

			if (firstFocusableElement.current) {
				firstFocusableElement.current.focus();
			}

			const previousFocus = document.activeElement;

			return () => {
				document.removeEventListener('keydown', handleKeyDown);
				(previousFocus as HTMLElement)?.focus();
			};
		} else {
			document.removeEventListener('keydown', handleKeyDown);
		}
	}, [isOpen, onClose]);

	const handleContentClick = (e: MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<div
			className={clsx(
				'fixed top-0 left-0 w-full h-full bg-slate-800/30 flex items-center justify-center z-50 transition-opacity duration-200',
				isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
			)}
			onClick={onClose}
		>
			<div
				className='bg-slate-700 border-2 border-slate-600 p-10 rounded-xl shadow-lg'
				ref={modalRef}
				role='dialog'
				aria-modal='true'
				onClick={e => handleContentClick(e)}
			>
				{children}
			</div>
		</div>
	);
};
