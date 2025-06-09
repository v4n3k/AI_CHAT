import { Axios, handleApiResponse, OpenAi } from '@shared/api';
import { useModelStore } from '../model/store';

export const createChatCompletion = async (content: string) => {
	useModelStore.setState({ isMessageLoading: true });

	try {
		const completion = await OpenAi.chat.completions.create({
			model: 'google/gemma-3n-e4b-it:free',
			messages: [
				{
					role: 'user',
					content,
				},
			],
		});

		return completion;
	} catch (error) {
		console.error('Error creating chat completion:', error);
	} finally {
		useModelStore.setState({ isMessageLoading: false });
	}
};

export const getAiModels = async () => {
	return await handleApiResponse(Axios.get('/ai_models'));
};
