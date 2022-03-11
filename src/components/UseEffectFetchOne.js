import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffectFetchOne = () => {
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);
	const [idFromButtonClick, setIdFromButtonClick] = useState(1);

	const handleClick = () => {
		setIdFromButtonClick(id);
	};

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
			.then(res => {
				setPost(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [idFromButtonClick]);

	return (
		<div>
			<h3>UseEffectFetchOne</h3>
			<input type='number' value={id} onChange={e => setId(e.target.value)} />
			<button type='button' onClick={handleClick}>
				Fetch Post
			</button>
			<div>{post.title}</div>
			{/* <ul>
				{post.map(post => {
					return <li key={post.id}>{post.title}</li>;
				})}
			</ul> */}
			<hr />
		</div>
	);
};

export default UseEffectFetchOne;
