import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { ADD_ITEMS_REQUEST, DELETE_ITEMS_FROM_CART_REQUEST, REMOVE_ITEMS_REQUEST } from '../constants/cartConstant';

import { addItem, deleteItem, removeItem, clearCart } from '../actions/cartAction';
import { USER_LOGOUT_SUCCESS } from '../constants/userConstants';

function* onAddItem({ payload: item }) {
	yield put(addItem(item));
	const state = yield select();
	yield localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
}

function* onDeleteItem({ payload: item }) {
	yield put(deleteItem(item));
	const state = yield select();
	yield localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
}

function* onRemoveItem({ payload: item }) {
	yield put(removeItem(item));
	const state = yield select();
	yield localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
}

function* clearCartOnLogout() {
	yield put(clearCart());
	yield localStorage.removeItem('cartItems');
}

export function* addItemRequest() {
	yield takeLatest(ADD_ITEMS_REQUEST, onAddItem);
}

export function* deleteItemRequest() {
	yield takeLatest(DELETE_ITEMS_FROM_CART_REQUEST, onDeleteItem);
}

export function* removeItemRequest() {
	yield takeLatest(REMOVE_ITEMS_REQUEST, onRemoveItem);
}

export function* onLogoutSuccess() {
	yield takeLatest(USER_LOGOUT_SUCCESS, clearCartOnLogout);
}

export function* cartSaga() {
	yield all([ call(addItemRequest), call(deleteItemRequest), call(removeItemRequest), call(onLogoutSuccess) ]);
}
