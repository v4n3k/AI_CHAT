import { create } from 'zustand';

interface ModelStore {
	isMessageLoading: boolean;
	setIsMessageLoading: (isMessageLoading: boolean) => void;
}

export const useModelStore = create<ModelStore>(set => ({
	isMessageLoading: false,
	setIsMessageLoading: (isMessageLoading: boolean) => set({ isMessageLoading }),
}));
