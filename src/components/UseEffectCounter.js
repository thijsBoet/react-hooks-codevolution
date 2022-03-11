import React, { useState, useEffect } from 'react';

const UseEffectCounter = () => {
	const [count, setCount] = useState(1);

	const tick = () => {
		setCount(prevCount => prevCount + 1);
	};

	useEffect(() => {
		const interval = setInterval(tick, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [count]);

	return (
		<div>
			<h3>UseEffectCounter</h3>
			{count}
			<hr/>
		</div>
	);
};

export default UseEffectCounter;
