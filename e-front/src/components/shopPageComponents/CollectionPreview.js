import React from 'react';
import CollectionItem from './CollectionItem';
import './CollectionPreview.scss';
import { useHistory } from 'react-router-dom';
import { CollectionPreviewContainer, Title, PreviewContainer } from './CollectionPreview.style';

const CollectionPreview = ({ title, items, routeName }) => {
	const history = useHistory();

	return (
		<CollectionPreviewContainer>
			<Title onClick={() => history.push(`/shop/${routeName}`)}>{title.toUpperCase()}</Title>
			<PreviewContainer>
				{items.slice(0, 4).map((item) => <CollectionItem key={item._id} item={item} />)}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
