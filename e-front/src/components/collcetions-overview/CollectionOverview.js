import React from 'react';
import CollectionPreview from '../../components/shopPageComponents/CollectionPreview';
import { useSelector } from 'react-redux';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import './CollectionOverview.style.scss';

const CollectionOverview = () => {
	const { loading, error, products } = useSelector((state) => state.productList);

	return loading ? (
		<WithSpinner />
	) : error ? (
		<div>{error.message}</div>
	) : (
		<div className="collection-overview">
			{products.map((collection) => (
				<CollectionPreview
					key={collection._id}
					title={collection.title}
					routeName={collection.routeName}
					items={collection.items}
				/>
			))}
		</div>
	);
};

export default CollectionOverview;
