import React, { Component } from 'react';
import html2pdf from 'html2pdf.js';
import { Navbar, Dropdown } from 'react-bootstrap';

class MyNavbar extends Component {
	constructor() {
		super();
		this.handlePdfClick = this.handlePdfClick.bind(this);
	}

	componentDidMount() {}

	handlePdfClick() {
		const element = document.getElementById('app');
		html2pdf(element);
	}

	render() {
		const data = this.props.data;
		return (
			<Navbar expand="lg" variant="light" bg="light" className="justify-content-between">
				<Navbar.Brand href="/">Home</Navbar.Brand>
				<Dropdown>
					<Dropdown.Toggle>Menu</Dropdown.Toggle>
					<Dropdown.Menu alignRight>
						<Dropdown.Item onClick={window.print}>Print</Dropdown.Item>
						<Dropdown.Item onClick={this.handlePdfClick}>Save as PDF</Dropdown.Item>
						<Dropdown.Item>Download Data</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar>
		);
	}
}

export default MyNavbar;
