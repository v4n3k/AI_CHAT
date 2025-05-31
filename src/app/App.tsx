import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OpenAI } from 'openai';
import { useEffect, useState } from 'react';
import { Layout } from './layouts';
import { AppRouter } from './routes';

const App = () => {
	const queryClient = new QueryClient();

	const [response, setResponse] = useState<string | null>(null);

	const API_KEY = import.meta.env.VITE_AI_API_KEY;

	useEffect(() => {
		const openai = new OpenAI({
			baseURL: 'https://openrouter.ai/api/v1',
			apiKey: API_KEY,
			dangerouslyAllowBrowser: true,
		});

		const chatCompletion = async () => {
			try {
				const completion = await openai.chat.completions.create({
					model: 'google/gemma-3n-e4b-it:free',
					messages: [
						{
							role: 'user',
							content: 'The capital of Sweden is',
						},
					],
				});
				setResponse(completion.choices[0].message.content);
			} catch (error) {
				console.error('Ошибка при запросе к OpenAI:', error);
			}
		};

		// chatCompletion();
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<AppRouter />
			</Layout>
		</QueryClientProvider>
	);
};

export default App;
