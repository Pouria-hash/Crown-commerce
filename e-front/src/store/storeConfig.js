import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterRducer } from '../reducers/userReducer';
import { cartToggleHiddenReducer, cartReducer } from '../reducers/cartReducer';
import { productListReducer, productCollectionReducer } from '../reducers/productReducer';
import { directoryReducer } from '../reducers/directoryReducer';

import rootSaga from '../redux-saga/root-saga';

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterRducer,
	cartToggleHidden: cartToggleHiddenReducer,
	cart: cartReducer,
	productList: productListReducer,
	productCollection: productCollectionReducer,
	directory: directoryReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
	cart: { cartItems: cartItemsFromStorage }
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [ sagaMiddleware ];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;
