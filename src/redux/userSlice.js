import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		user: null,
		loggedin: false,
	},
	reducers: {
		rdx_login: function (state, { payload }) {
			state.user = payload;
			state.loggedin = true;
		},
		rdx_logout: function (state) {
			state.user = null;
			state.loggedin = false;

			localStorage.clear();
			sessionStorage.clear();
		},
	},
});

export default userSlice.reducer;

export const { rdx_login, rdx_logout } = userSlice.actions;
