import React, { useState } from 'react';

const HookCounterThree = () => {
	const [name, setName] = useState({
		firstName: '',
		lastName: '',
	});

	return (
		<div>
			<h3>HookCounterThree</h3>
			<form>
				<div>
					<label htmlFor='firstName'>First Name: </label>
					<input
						value={name.firstName}
						onChange={e => setName({ ...name, firstName: e.target.value })}
						type='text'
						id='firstName'
					/>
				</div>
				<div>
					<label htmlFor='lastName'>Last Name: </label>
					<input
						value={name.lastName}
						onChange={e => setName({ ...name, lastName: e.target.value })}
						type='text'
						id='lastName'
					/>
				</div>
			</form>
			<h4>
				Your name is: {name.firstName} {name.lastName}
			</h4>
			<hr />
		</div>
	);
};

export default HookCounterThree;
