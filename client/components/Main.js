import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Example from './Example';
import Navbar from './Navbar';

class Main extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" component={Navbar} />
				<h2>EA Data Visualization Site</h2>
				<Route exact path="/example" component={Example} />
			</Router>
		);
	}
}

export default Main;
