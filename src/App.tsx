import Nav from './components/nav/Nav';
import IDgen from './pages/uuid/IDgen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Credits from './components/credits/Credits';
import { UuidProvider } from './context/UuidContext';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<UuidProvider>
						<Route exact path='/'>
							<Nav />
							<IDgen />
							<Credits />
						</Route>
					</UuidProvider>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
