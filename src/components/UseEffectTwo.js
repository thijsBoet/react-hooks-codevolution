import React, { useState, useEffect } from 'react';

const UseEffectTwo = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = e => {
		console.log('Mouse event');
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log('UseEffect called');
		window.addEventListener('mousemove', logMousePosition);

		return () => {
			console.log('Component unmounting code')
			window.removeEventListener('mousemove', logMousePosition)
		}
	}, []);

	return (
		<div>
			X: {x} | Y: {y}
			<hr/>
		</div>
	);
};

export default UseEffectTwo;
