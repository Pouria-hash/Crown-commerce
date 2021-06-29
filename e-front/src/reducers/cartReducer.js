import {
	TOGGLE_CART_HIDDEN,
	ADD_ITEMS,
	REMOVE_ITEMS,
	DELETE_ITEMS_FROM_CART,
	CLEAR_CART
} from '../constants/cartConstant';

export const cartToggleHiddenReducer = (state = { hidden: true }, action) => {
	switch (action.type) {
		case TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };
		default:
			return state;
	}
};

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case ADD_ITEMS:
			const addItem = action.payload;
			const existItem = state.cartItems.find((item) => item._id === addItem._id);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map(
						(cartItem) => (cartItem._id === addItem._id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem)
					)
				};
			}

			return { ...state, cartItems: [ ...state.cartItems, { ...addItem, qty: 1 } ] };

		case DELETE_ITEMS_FROM_CART:
			const deleteItem = action.payload;

			const filteredItems = state.cartItems.filter((item) => item._id !== deleteItem._id);

			return { ...state, cartItems: filteredItems };

		case REMOVE_ITEMS:
			const removeItem = action.payload;
			const existRemoveItem = state.cartItems.find((item) => item._id === removeItem._id);

			if (existRemoveItem.qty === 1) {
				return { ...state, cartItems: state.cartItems.filter((item) => item._id !== existRemoveItem._id) };
			}
			return {
				...state,
				cartItems: state.cartItems.map(
					(item) => (item._id === removeItem._id ? { ...item, qty: item.qty - 1 } : item)
				)
			};
		case CLEAR_CART:
			return { ...state, cartItems: [] };
		default:
			return state;
	}
};
