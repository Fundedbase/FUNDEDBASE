import React from 'react';

const InputBox = ({ icon, label, type, placeholder, value, onChange }) => {
	return (
		<div>
			{label && <label>{label}</label>}
			Input Box
		</div>
	);
};

export default InputBox;
