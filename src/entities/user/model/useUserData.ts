export const useUserData = () => {
	const userId = localStorage.getItem('userId');
	const login = localStorage.getItem('login');

	return { userId, login };
};
