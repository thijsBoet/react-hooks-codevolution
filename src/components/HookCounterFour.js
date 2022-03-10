import React, { useState } from 'react';

const HookCounterFour = () => {
	const [items, setItems] = useState([]);

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.ceil(Math.random() * 10),
			},
		]);
	};
	return (
		<div>
			<h3>HookCounterFour</h3>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
			<hr />
		</div>
	);
};

export default HookCounterFour;
