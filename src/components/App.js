//creates a route for various components

import React from 'react';
import EventCreate from './EventCreate';
import EventDisplay from './EventDisplay';

import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<Router history={history}>
					<div>
						<Switch>
							<Route path="/events/new" exact component={EventCreate} />
							<Route path="/" exact component={EventDisplay} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;

