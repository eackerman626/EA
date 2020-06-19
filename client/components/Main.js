import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import School from './School';

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
