import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import GeneratePassword from '../Generate';
import Search from '../Search';

import * as ROUTES from '../../constants/routes';

const App = () => (
	<Router>
		<div className="nav">
			<ul>
				<li>
					<Link to={ROUTES.SEARCH}>Search</Link>
				</li>
				<li>
					<Link to={ROUTES.GENERATE}>Generate</Link>
				</li>
			</ul>
			<hr />
			
			<Route exact path={ROUTES.HOME} component={HOME} />
			<Route path={ROUTES.SEARCH} component={Search} />

		</div>
	</Router>
);

export default App;