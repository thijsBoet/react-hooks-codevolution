import React from 'react';
import { UserContext, ChannelContext } from '../../App';

const ComponentF = () => {
	return (
		<div>
			<h3>Context Provider & Consumer</h3>
			<UserContext.Consumer>
				{user => {
					return (
						<ChannelContext.Consumer>
							{channel => {
								return <div>{user} is listening to {channel}</div>;
							}}
						</ChannelContext.Consumer>
					)
				}}
			</UserContext.Consumer>
		</div>
	);
};

export default ComponentF;
