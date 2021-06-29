import React from 'react';
import { connect } from 'react-redux';
import './CheckoutPage.style.scss';
import CheckoutItem from '../../components/ckeckout-item/CheckoutItems';

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product </span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem, index) => <CheckoutItem cartItem={cartItem} key={index} />)}

			<div className="total">
				<span>Total: ${total}</span>
			</div>
		</div>
	);
};

const mapStateToProps = ({ cart }) => ({
	cartItems: cart.cartItems,
	total: cart.cartItems.reduce((acc, currentItem) => acc + currentItem.qty * currentItem.price, 0)
});

export default connect(mapStateToProps)(CheckoutPage);
