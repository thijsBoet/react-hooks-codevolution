import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import UseEffectOne from './components/UseEffectOne';
import UseEffectTwoContainer from './components/UseEffectTwoContainer';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectFetchOne from './components/UseEffectFetchOne';

import './App.css';

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
		</div>
	);
}

export default App;
