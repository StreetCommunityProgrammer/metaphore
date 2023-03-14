'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';

function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = useCallback(() => {
		if (window.pageYOffset > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, []);

	const backToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, [toggleVisibility]);

	return (
		<button
			className={`btn btn-sm fixed bottom-12 right-8 ${
				isVisible ? null : 'hidden'
			}`}
			onClick={() => backToTop()}
		>
			<BsArrowUp />
		</button>
	);
}

export default ScrollToTop;
