import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

export const AppRouter = () => {
	return (
		<Routes>
			{ROUTES.map(route => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	);
};
