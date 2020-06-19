import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Column } from 'react-bootstrap';

import School from './School';
import Navbar from './Navbar';

class Main extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" component={School} />
			</Router>
		);
	}
}

export default Main;
