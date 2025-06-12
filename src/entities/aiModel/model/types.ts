export interface AiModel {
	name: string;
	description: string;
	useCases: string;
}

export interface CreateChatCompletionParams {
	model: string;
	content: string;
}
