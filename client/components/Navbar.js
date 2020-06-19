import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Navbar extends Component {
	constructor() {
		super();
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	componentDidMount() {}

	handleButtonClick() {}

	render() {
		return (
			<div className="navbar">
				<button type="button" className="example_btn">
					Button
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
