import React from 'react';
import { withRouter } from 'react-router-dom';

import './HomeElement.scss';

const HomeElement = ({ title, image, size, link, history, match }) => {
	return (
		<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${link}`)}>
			<div className="background-image" style={{ backgroundImage: `url(${image})` }} />
			<div className="content">
				<h2 className="title">{title.toUpperCase()}</h2>
				<p className="subtitle">SHOP NOW</p>
			</div>
		</div>
	);
};

export default withRouter(HomeElement);
