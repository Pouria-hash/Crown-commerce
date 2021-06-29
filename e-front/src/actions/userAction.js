import {
	CHECK_USER_SESSION,
	CHECK_USER_SESSION_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT_REQUEST,
	USER_LOGOUT_SUCCESS,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS
} from '../constants/userConstants';
// import axios from 'axios';

export const userLoginStart = ({ email, password }) => ({
	type: USER_LOGIN_REQUEST,
	payload: { email, password }
});

export const userLoginSuccess = (userInfo) => ({
	type: USER_LOGIN_SUCCESS,
	payload: userInfo
});
export const userLoginFail = (errorMessage) => ({
	type: USER_LOGIN_FAIL,
	payload: errorMessage
});

// export const login = (values) => async (dispatch) => {
// 	try {
// 		dispatch({ type: USER_LOGIN_REQUEST });
// 		const config = {
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		};
// 		const { data } = await axios.post('/api/user/login', values, config);

// 		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
// 		localStorage.setItem('userInfo', JSON.stringify(data));
// 	} catch (error) {
// 		dispatch({
// 			type: USER_LOGIN_FAIL,
// 			payload: error.response && error.response.data.message ? error.response.data.message : error.message
// 		});
// 	}
// };

export const userRegisterRequest = (values) => ({
	type: USER_REGISTER_REQUEST,
	payload: values
});
export const userRegisterSuccess = (userInfo) => ({
	type: USER_REGISTER_SUCCESS,
	payload: userInfo
});
export const userRegisterFail = (errorMessage) => ({
	type: USER_REGISTER_FAIL,
	payload: errorMessage
});

export const userLogoutRequst = () => ({
	type: USER_LOGOUT_REQUEST
});

export const userLogoutSuccess = () => ({
	type: USER_LOGOUT_SUCCESS
});

export const checkUserSession = () => ({
	type: CHECK_USER_SESSION
});

export const checkUserSessionSuccess = (message) => ({
	type: CHECK_USER_SESSION_SUCCESS,
	payload: message
});

// export const logout = () => (dispatch) => {
// 	localStorage.removeItem('userInfo');
// 	dispatch({ type: USER_LOGOUT });
// };

// export const register = (values) => async (dispatch) => {
// 	try {
// 		dispatch({ type: USER_REGISTER_REQUEST });
// 		const config = {
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		};
// 		const { data } = await axios.post('/api/user/register', values, config);

// 		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
// 		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

// 		localStorage.setItem('userInfo', JSON.stringify(data));
// 	} catch (error) {
// 		dispatch({
// 			type: USER_REGISTER_FAIL,
// 			payload: error.response && error.response.data.message ? error.response.data.message : error.message
// 		});
// 	}
// };
