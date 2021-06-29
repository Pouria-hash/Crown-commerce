import { call, all } from 'redux-saga/effects';

import { fetchProductListStart, fetchCollectionStart } from './shop.saga';

import { userSaga } from './user.saga';
import { cartSaga } from './cart.saga';

export default function* rootSaga() {
	yield all([ call(fetchProductListStart), call(fetchCollectionStart), call(userSaga), call(cartSaga) ]);
}
