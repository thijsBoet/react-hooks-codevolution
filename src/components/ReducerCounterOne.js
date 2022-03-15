import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'decrement':
			return state - 1;
		case 'reset':
			return initialState;
		case 'increment':
			return state + 1;
		default:
			return state;
	}
};

const ReducerCounterOne = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h3>ReducerCounterOne</h3>
			<div>{count}</div>
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
			<button onClick={() => dispatch('increment')}>Increment</button>

			<hr />
		</div>
	);
};

export default ReducerCounterOne;
