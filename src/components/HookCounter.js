import React, { useState } from 'react';

const HookCounter = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h3>HookCounter</h3>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
			<hr />
		</div>
	);
};

export default HookCounter;
