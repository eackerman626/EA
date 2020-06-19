import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, Button } from 'react-bootstrap';

class Blah extends Component {
	constructor() {
		super();
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	componentDidMount() {}

	handleButtonClick() {}

	render() {
		return (
			<Navbar className="navbar">
				<Button className="my_button">Button</Button>
			</Navbar>
		);
	}
}

export default Blah;
