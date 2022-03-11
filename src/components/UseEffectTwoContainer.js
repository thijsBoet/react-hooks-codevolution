import React, { useState } from 'react';
import UseEffectTwo from './UseEffectTwo';

const UseEffectTwoContainer = () => {
	const [display, setDisplay] = useState(true);

	return (
		<div>
			<h3>UseEffectTwo</h3>
			<button onClick={() => setDisplay(!display)}>Toggle Display</button>
			{display && <UseEffectTwo />}
		</div>
	);
};

export default UseEffectTwoContainer;
