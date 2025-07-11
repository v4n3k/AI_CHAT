import { create } from 'zustand';

interface ModelStore {
	isMessageLoading: boolean;
	setIsMessageLoading: (isMessageLoading: boolean) => void;

	model: string;
	setModel: (model: string) => void;

	shortModel: string;
	setShortModel: (shortModel: string) => void;
}

export const useModelStore = create<ModelStore>(set => ({
	isMessageLoading: false,
	setIsMessageLoading: (isMessageLoading: boolean) => set({ isMessageLoading }),

	model: '',
	setModel: (model: string) => set({ model }),

	shortModel: '',
	setShortModel: (shortModel: string) => set({ shortModel }),
}));
