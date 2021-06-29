import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg';
import './CartIcon.scss';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../actions/cartAction';

const CartIcon = () => {
	const dispatch = useDispatch();

	const { cartItems } = useSelector((state) => state.cart);
	const totalItems = cartItems.reduce((acc, currentItem) => acc + currentItem.qty, 0);

	const handleShowCartDropdown = () => {
		dispatch(toggleCartHidden());
	};

	return (
		<div className="cart-icon" onClick={handleShowCartDropdown}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{totalItems}</span>
		</div>
	);
};

export default CartIcon;
