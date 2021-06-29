import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';
import { toggleCartHidden } from '../../actions/cartAction';

const CartDropdown = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);

	const history = useHistory();
	const dispatch = useDispatch();

	const handleCheckout = (e) => {
		e.preventDefault();
		history.push('/checkout');
		dispatch(toggleCartHidden());
	};
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((item, index) => (
						<div className="row mb-2" key={index}>
							<div className="col-4">
								<img
									src={item.imageUrl}
									alt={item.title}
									style={{ width: '100%', height: '80px', objectFit: 'cover' }}
								/>
							</div>
							<div className="col-7">
								<p>{item.name}</p>
								<p>
									{item.qty} x {item.price}
								</p>
							</div>
						</div>
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>

			<CustomButton onClick={handleCheckout}>checkout</CustomButton>
		</div>
	);
};

export default CartDropdown;
