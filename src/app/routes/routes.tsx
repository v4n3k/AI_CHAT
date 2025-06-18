import { ChatPage, HomePage, SignInPage, SignUpPage } from '@pages/index';
import { generatePath } from 'react-router-dom';

export const ROUTE_TEMPLATES = {
	HOME: '/',
	CHAT: '/chats/:id',
	SIGN_UP: '/sign_up',
	SIGN_IN: '/sign_in',
} as const;

export const PATH_GENERATORS = {
	home: () => ROUTE_TEMPLATES.HOME,
	chat: (id: string | number) =>
		generatePath(ROUTE_TEMPLATES.CHAT, { id: id.toString() }),
	signUp: () => ROUTE_TEMPLATES.SIGN_UP,
	signIn: () => ROUTE_TEMPLATES.SIGN_IN,
};

export const ROUTES = [
	{
		path: ROUTE_TEMPLATES.HOME,
		element: <HomePage />,
	},
	{
		path: ROUTE_TEMPLATES.CHAT,
		element: <ChatPage />,
	},
	{
		path: ROUTE_TEMPLATES.SIGN_UP,
		element: <SignUpPage />,
	},
	{
		path: ROUTE_TEMPLATES.SIGN_IN,
		element: <SignInPage />,
	},
];
