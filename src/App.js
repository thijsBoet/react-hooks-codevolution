import React from 'react';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import UseEffectOne from './components/UseEffectOne';
import UseEffectTwoContainer from './components/UseEffectTwoContainer';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectFetchOne from './components/UseEffectFetchOne';
import ComponentC from './components/Context/ComponentC';
import ComponentCHook from './components/ContextHook/ComponentC';
import ReducerCounterOne from './components/ReducerCounterOne';
import ReducerCounterTwo from './components/ReducerCounterTwo';

import './App.css';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
	return (
		<div className='App'>
			<HookCounter />
			<HookCounterTwo />
			<HookCounterThree />
			<HookCounterFour />
			<UseEffectOne />
			<UseEffectTwoContainer />
			<UseEffectCounter />
			<UseEffectFetchOne />
			<UserContext.Provider value={'Boet'}>
				<ChannelContext.Provider value={'Codevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
			<UserContext.Provider value={'Boet'}>
				<ChannelContext.Provider value={'Codevolution'}>
					<ComponentCHook />
				</ChannelContext.Provider>
			</UserContext.Provider>
			<ReducerCounterOne />
			<ReducerCounterTwo />
		</div>
	);
}

export default App;
