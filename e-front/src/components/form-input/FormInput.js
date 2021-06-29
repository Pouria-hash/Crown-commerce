import React from 'react';
import './FormInput.scss';

const FormInput = ({ handleChange, label, handleShowPassword, showPassword, ...otherProps }) => {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...otherProps} />
			{label ? (
				<label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>{label}</label>
			) : null}
			{otherProps.pass === 'password' ? (
				<button type="button" onClick={handleShowPassword} className="btn show-password">
					{showPassword ? 'Hide' : 'Show'}
				</button>
			) : null}
		</div>
	);
};

export default FormInput;
