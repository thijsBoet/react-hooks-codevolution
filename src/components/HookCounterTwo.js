import React, { useState } from 'react';

const HookCounterTwo = () => {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);

	return (
		<div>
			<h3>HookCounterTwo</h3>
			<h4>Count: {count}</h4>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>
			<hr />
		</div>
	);
};

export default HookCounterTwo;
