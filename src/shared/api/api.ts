import type { AxiosResponse } from 'axios';
import axios from 'axios';
import OpenAI from 'openai';

const API_KEY = import.meta.env.VITE_AI_API_KEY;

export const Axios = axios.create({
	baseURL: 'http://localhost:4200/api',
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const OpenAi = new OpenAI({
	baseURL: 'https://openrouter.ai/api/v1',
	apiKey: API_KEY,
	dangerouslyAllowBrowser: true,
});

export const handleApiResponse = async <T>(
	promise: Promise<AxiosResponse<T>>,
	errorMessage: string = 'Request failed with unknown error'
) => {
	try {
		const response = await promise;

		if (response.status < 200 || response.status >= 300) {
			const message =
				errorMessage || `Request failed with status ${response.status}`;
			console.error(message);
			throw new Error(message);
		}

		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
