import React, { useState, useEffect } from 'react';

const UseEffectOne = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

	useEffect(() => {
		console.log('UseEffect - Updating document title');
		document.title = `You clicked ${count} times`;
	}, [count]);

	return (
		<div>
			<h3>UseEffectOne</h3>
			<input type='text' value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Click {count} times
			</button>
			<hr />
		</div>
	);
};

export default UseEffectOne;
