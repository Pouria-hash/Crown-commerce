import {
	COLLECTION_LIST_FAIL,
	COLLECTION_LIST_REQUEST,
	COLLECTION_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS
} from '../constants/productConstans';
// import axios from 'axios';

export const fetchProductListStart = () => ({
	type: PRODUCT_LIST_REQUEST
});

export const fetchProductListSuccess = (products) => ({
	type: PRODUCT_LIST_SUCCESS,
	payload: products
});

export const fetchProductListFail = (errorMessage) => ({
	type: PRODUCT_LIST_FAIL,
	payload: errorMessage
});

// export const listProduct = () => async (dispatch) => {
// 	try {
// 		dispatch({ type: PRODUCT_LIST_REQUEST });

// 		const { data } = await axios.get('/api/products');

// 		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
// 	} catch (error) {
// 		dispatch({
// 			type: PRODUCT_LIST_FAIL,
// 			payload: error.response && error.response.data.message ? error.response.data.message : error.message
// 		});
// 	}
// };

export const fetchCollectionStart = (collectionId) => ({
	type: COLLECTION_LIST_REQUEST,
	payload: collectionId
});

export const fetchCollectionSuccess = (collection) => ({
	type: COLLECTION_LIST_SUCCESS,
	payload: collection
});

export const fetchCollectionFail = (errorMessaages) => ({
	type: COLLECTION_LIST_FAIL,
	payload: errorMessaages
});

// export const showCollection = (collectionId) => async (dispatch) => {
// 	try {
// 		dispatch({ type: COLLECTION_LIST_REQUEST });

// 		const { data } = await axios.get(`/api/products/${collectionId}`);

// 		dispatch({ type: COLLECTION_LIST_SUCCESS, payload: data });
// 	} catch (error) {
// 		dispatch({
// 			type: COLLECTION_LIST_FAIL,
// 			payload: error.response && error.response.data ? error.response.data.message : error.message
// 		});
// 	}
// };
