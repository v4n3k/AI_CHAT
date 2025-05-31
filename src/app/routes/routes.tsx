import { ChatPage, HomePage, SignInPage, SignUpPage } from '@pages/index';

export const ROUTE_PATHS = {
	HOME: '/',
	CHAT: '/chat/:id',
	SIGN_UP: '/sign_up',
	SIGN_IN: '/sign_in',
} as const;

export const ROUTES = [
	{
		path: ROUTE_PATHS.HOME,
		element: <HomePage />,
	},
	{
		path: ROUTE_PATHS.CHAT,
		element: <ChatPage />,
	},
	{
		path: ROUTE_PATHS.SIGN_UP,
		element: <SignUpPage />,
	},
	{
		path: ROUTE_PATHS.SIGN_IN,
		element: <SignInPage />,
	},
];
