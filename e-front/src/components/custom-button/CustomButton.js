import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, inverted, addItems, ...otherProps }) => {
	return (
		<button
			onClick={() => (addItems ? addItems() : null)}
			className={`${inverted ? 'inverted' : null} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
