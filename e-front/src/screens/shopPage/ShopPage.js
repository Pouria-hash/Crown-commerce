import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import Shop_Data from './shop-data';
import { fetchProductListStart } from '../../actions/productAction';
import CollcetionOverview from '../../components/collcetions-overview/CollectionOverview';
import './ShopPage.scss';

const ShopPage = ({ match }) => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchProductListStart());
		},
		[ dispatch ]
	);

	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollcetionOverview} />
		</div>
	);
};

export default ShopPage;
