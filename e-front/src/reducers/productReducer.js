import {
	COLLECTION_LIST_FAIL,
	COLLECTION_LIST_REQUEST,
	COLLECTION_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS
} from '../constants/productConstans';

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true };
		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productCollectionReducer = (state = { collection: {} }, action) => {
	switch (action.type) {
		case COLLECTION_LIST_REQUEST:
			return { loading: true };
		case COLLECTION_LIST_SUCCESS:
			return { loading: false, collection: action.payload };
		case COLLECTION_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
