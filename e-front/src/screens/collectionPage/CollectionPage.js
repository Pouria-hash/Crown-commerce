import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CollectionPage.style.scss';
import { fetchCollectionStart } from '../../actions/productAction';
import CollectionItem from '../../components/shopPageComponents/CollectionItem';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionPage = ({ match }) => {
	const collectionId = match.params.collectionid;
	const dispatch = useDispatch();

	const productCollection = useSelector((state) => state.productCollection);
	const { error, loading, collection } = productCollection;

	useEffect(
		() => {
			dispatch(fetchCollectionStart(collectionId));
		},
		[ dispatch, collectionId ]
	);

	return loading ? (
		<WithSpinner />
	) : error ? (
		<h3>{error}</h3>
	) : (
		<div>
			<h1 className="text-center mb-5">{collection.title}</h1>
			<div className="d-flex flex-wrap justify-content-evenly">
				{collection.title && collection.items.map((item) => <CollectionItem key={item._id} item={item} />)}
			</div>
		</div>
	);
};

export default CollectionPage;
