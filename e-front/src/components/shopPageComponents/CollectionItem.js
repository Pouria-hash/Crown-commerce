import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { useDispatch } from 'react-redux';
import { addItemsRequest } from '../../actions/cartAction';
import './CollectionItem.scss';

const CollectionItem = ({ item }) => {
	const dispatch = useDispatch();

	const handleAddItems = () => {
		dispatch(addItemsRequest(item));
	};
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{item.name}</span>
				<span className="price">${item.price}</span>
			</div>
			<CustomButton inverted addItems={handleAddItems}>
				{' '}
				Add to cart{' '}
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
