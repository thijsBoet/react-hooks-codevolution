import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';

import './App.css';

function App() {
	return (
		<div className='App'>
			<HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
		</div>
	);
}

export default App;
