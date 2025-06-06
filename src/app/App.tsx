import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layouts';
import { AppRouter } from './routes';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Layout>
					<AppRouter />
				</Layout>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
