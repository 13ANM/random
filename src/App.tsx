import Nav from './components/nav/Nav';
import IDgen from './pages/IDgen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Credits from './components/credits/Credits';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/'>
						<Nav />
						<IDgen />
						<Credits />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
