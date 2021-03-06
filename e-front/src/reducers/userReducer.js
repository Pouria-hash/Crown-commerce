import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_FAIL,
	USER_LOGIN_SUCCESS,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_LOGOUT_REQUEST,
	USER_LOGOUT_SUCCESS,
	CHECK_USER_SESSION_SUCCESS
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true };
		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_LOGIN_FAIL:
			localStorage.removeItem('userInfo');
			return { loading: false, error: action.payload };
		case CHECK_USER_SESSION_SUCCESS:
			return { ...state, message: action.payload };
		case USER_LOGOUT_REQUEST:
			return { loading: true };
		case USER_LOGOUT_SUCCESS:
			return { loading: false };
		default:
			return state;
	}
};

export const userRegisterRducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true };
		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
