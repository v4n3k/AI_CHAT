export const useUserData = () => {
	const userId = localStorage.getItem('userId');
	const login = localStorage.getItem('login');

	const isAuth =
		typeof userId === 'string' &&
		typeof login === 'string' &&
		userId !== '' &&
		login !== '';

	return { userId, login, isAuth };
};
