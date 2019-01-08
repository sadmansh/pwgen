import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Generate from '../Generate';
import Search from '../Search';
import Pwned from '../Pwned';

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
				<li>
					<Link to={ROUTES.PWNED}>Pwned</Link>
				</li>
			</ul>
			<hr />
			
			<Route path={ROUTES.SEARCH} component={Search} />
			<Route path={ROUTES.GENERATE} component={Generate} />
			<Route path={ROUTES.PWNED} component={Pwned} />
		</div>
	</Router>
);

export default App;