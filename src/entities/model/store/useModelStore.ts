import { create } from 'zustand';
import type { Message } from '../types';

interface ModelStore {
	messages: Message[];

	setMessages: (
		updater: Message[] | ((prevMessages: Message[]) => Message[])
	) => void;
}

export const useModelStore = create<ModelStore>(set => ({
	messages: [],
	setMessages: updater => {
		if (typeof updater === 'function') {
			set(state => ({
				messages: updater(state.messages),
			}));
		} else {
			set({ messages: updater });
		}
	},
}));
