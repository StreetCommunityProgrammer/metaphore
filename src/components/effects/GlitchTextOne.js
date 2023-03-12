import React from 'react';

const GlitchTextOne = ({ text, textClasses = 'text-gray-400 font-bold' }) => {
	return (
		<span className={`text-glitch ${textClasses}`} data-text={text}>
			{text}
		</span>
	);
};

export default GlitchTextOne;
