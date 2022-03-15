import React, { useReducer } from 'react';

const initialState = {
	firstCounter: 0,
	secondCounter: 10,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'decrement2':
			return { ...state, secondCounter: state.secondCounter - action.value };
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value };
		case 'reset':
			return { ...state, firstCounter: initialState.firstCounter };
		case 'increment':
			return { ...state, firstCounter: state.firstCounter + action.value };
		case 'increment2':
			return { ...state, secondCounter: state.secondCounter + action.value };
		default:
			return state;
	}
};

const ReducerCounterTwo = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h3>ReducerCounterTwo</h3>
			<div>firstCounter | {count.firstCounter}</div>
			<div>secondCounter | {count.secondCounter}</div>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
				Decrement 5
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>
				Increment 5
			</button>
			<div>
				<button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
					Decrement Counter Two
				</button>
				<button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
					Increment Counter Two
				</button>
			</div>
			<hr />
		</div>
	);
};

export default ReducerCounterTwo;
