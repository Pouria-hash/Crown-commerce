import { put, takeLatest } from 'redux-saga/effects';

import { COLLECTION_LIST_REQUEST, PRODUCT_LIST_REQUEST } from '../constants/productConstans';
import axios from 'axios';
import {
	fetchProductListSuccess,
	fetchProductListFail,
	fetchCollectionFail,
	fetchCollectionSuccess
} from '../actions/productAction';

function* fetchProductListAsync() {
	try {
		const res = yield axios.get('/api/products');
		const productList = yield res.data;
		yield put(fetchProductListSuccess(productList));
	} catch (error) {
		const errorMessage =
			error.response && error.response.data.message ? error.response.data.message : error.message;
		yield put(fetchProductListFail(errorMessage));
	}
}

export function* fetchCollectionAsync({ payload: collectionId }) {
	try {
		const { data } = yield axios.get(`/api/products/${collectionId}`);
		yield put(fetchCollectionSuccess(data));
	} catch (error) {
		const errorMessage =
			error.response && error.response.data.message ? error.response.data.message : error.message;
		yield put(fetchCollectionFail(errorMessage));
	}
}

export function* fetchProductListStart() {
	yield takeLatest(PRODUCT_LIST_REQUEST, fetchProductListAsync);
}

export function* fetchCollectionStart() {
	yield takeLatest(COLLECTION_LIST_REQUEST, fetchCollectionAsync);
}
