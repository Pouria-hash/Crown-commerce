import React from 'react';
import { connect } from 'react-redux';
import { addItemsRequest, removeItemRequest, deleteItemRequest } from '../../actions/cartAction';
import './CheckoutItems.style.scss';

const CheckoutItems = ({ cartItem, clearItem, addItem, removeItem }) => {
	const handleDeleteItem = (item) => {
		clearItem(item);
	};
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={cartItem.imageUrl} alt="item" />
			</div>
			<span className="name">{cartItem.name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>{' '}
				<span className="value">{cartItem.qty}</span>{' '}
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">${cartItem.price}</span>
			<div className="remove-button" onClick={() => handleDeleteItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(deleteItemRequest(item)),
	addItem: (item) => dispatch(addItemsRequest(item)),
	removeItem: (item) => dispatch(removeItemRequest(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItems);
