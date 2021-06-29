import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import {
	checkUserSessionSuccess,
	userLoginFail,
	userLoginSuccess,
	userLogoutSuccess,
	userRegisterFail,
	userRegisterSuccess
} from '../actions/userAction';
import {
	CHECK_USER_SESSION,
	USER_LOGIN_REQUEST,
	USER_LOGOUT_REQUEST,
	USER_REGISTER_REQUEST
} from '../constants/userConstants';
import axios from 'axios';

export function* userLogin({ payload: { email, password } }) {
	try {
		const config = {
			headers: { 'Content-Type': 'application/json' }
		};
		const { data } = yield axios.post('/api/user/login', { email, password }, config);
		yield put(userLoginSuccess(data));
		yield localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		const errorMessage =
			error.response && error.response.data.message ? error.response.data.message : error.message;
		yield put(userLoginFail(errorMessage));
	}
}

function* userRegister({ payload: userInput }) {
	try {
		const config = {
			headers: { 'Content-Type': 'application/json' }
		};
		const { data } = yield axios.post('/api/user/register', userInput, config);
		yield put(userRegisterSuccess(data));
		yield put(userLoginSuccess(data));
		yield localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		const errorMessage =
			error.response && error.response.data.message ? error.response.data.message : error.message;
		yield put(userRegisterFail(errorMessage));
	}
}

function* userLogoutAsync() {
	yield localStorage.removeItem('userInfo');
	yield put(userLogoutSuccess());
}

function* isUserAuthenticated() {
	try {
		const state = yield select();
		const token = state.userLogin && state.userLogin.userInfo ? state.userLogin.userInfo.token : null;
		if (!token) return;
		const { data } = yield axios.get('/api/user/profile', {
			headers: { Authorization: `Bearer ${token}` }
		});
		yield put(checkUserSessionSuccess(data.message));
	} catch (error) {
		const errorMessage =
			error.response && error.response.data.message ? error.response.data.message : error.message;
		yield put(userLoginFail(errorMessage));
	}
}

export function* userLoginStart() {
	yield takeLatest(USER_LOGIN_REQUEST, userLogin);
}

export function* userRegisterRequset() {
	yield takeLatest(USER_REGISTER_REQUEST, userRegister);
}

export function* userLogoutRequset() {
	yield takeLatest(USER_LOGOUT_REQUEST, userLogoutAsync);
}

export function* onCheckUserSession() {
	yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
	yield all([ call(userLoginStart), call(userRegisterRequset), call(userLogoutRequset), call(onCheckUserSession) ]);
}
