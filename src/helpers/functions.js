// redux
import store from '../redux';
import { rdx_login } from '../redux/userSlice';

export const hlpr_validate_login = () => {
	// Checks if the user is loggedin

	const loggedInUser = localStorage.loggedInUserData || sessionStorage.loggedInUserData;
	console.log('loggedInUser', loggedInUser);

	if (loggedInUser) {
		// convert to JS
		const user = JSON.parse(loggedInUser);

		// Send to redux
		store.dispatch(rdx_login(user));
	}
};
