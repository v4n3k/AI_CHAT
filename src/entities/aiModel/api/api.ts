import { Axios, handleApiResponse, OpenAi } from '@shared/api';
import type { CreateChatCompletionParams } from '../model';
import { useModelStore } from '../model/store';

export const createChatCompletion = async ({
	model,
	content,
}: CreateChatCompletionParams) => {
	useModelStore.setState({ isMessageLoading: true });

	try {
		const completion = await OpenAi.chat.completions.create({
			model,
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
