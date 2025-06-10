import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from './layouts';
import { AppRouter } from './routes';
import './toast.css';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Layout>
					<AppRouter />
					<ToastContainer
						position='top-center'
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='dark'
					/>
				</Layout>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
