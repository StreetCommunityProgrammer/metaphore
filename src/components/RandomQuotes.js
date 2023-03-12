import React, { useEffect, useState } from 'react';
import quotePicker from './quotes/quotePicker';

function RandomQuote({ language }) {
	const [quote, setQuote] = useState('');

	useEffect(() => {
		const getRandomQuote = () => {
			const quotes = quotePicker(language);
			const randomIndex = Math.floor(Math.random() * quotes.length);
			setQuote(quotes[randomIndex]);
		};
		getRandomQuote();
	}, [language]);

	return (
		<div>
			<p className="text-white">&mdash; {quote}</p>
		</div>
	);
}

export default RandomQuote;
