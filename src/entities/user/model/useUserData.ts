export const useUserData = () => {
	const userId = Number(localStorage.getItem('userId'));
	const login = localStorage.getItem('login');

	const isAuth = typeof login === 'string' && login !== '';

	return { userId, login, isAuth };
};
