import {
	ADD_ITEMS,
	ADD_ITEMS_REQUEST,
	CLEAR_CART,
	DELETE_ITEMS_FROM_CART,
	DELETE_ITEMS_FROM_CART_REQUEST,
	REMOVE_ITEMS,
	REMOVE_ITEMS_REQUEST,
	TOGGLE_CART_HIDDEN
} from '../constants/cartConstant';

export const toggleCartHidden = () => ({
	type: TOGGLE_CART_HIDDEN
});

export const addItemsRequest = (item) => ({
	type: ADD_ITEMS_REQUEST,
	payload: item
});
export const addItem = (item) => ({
	type: ADD_ITEMS,
	payload: item
});

export const deleteItemRequest = (item) => ({
	type: DELETE_ITEMS_FROM_CART_REQUEST,
	payload: item
});
export const deleteItem = (item) => ({
	type: DELETE_ITEMS_FROM_CART,
	payload: item
});

export const removeItemRequest = (item) => ({
	type: REMOVE_ITEMS_REQUEST,
	payload: item
});
export const removeItem = (item) => ({
	type: REMOVE_ITEMS,
	payload: item
});

export const clearCart = () => ({
	type: CLEAR_CART
});
