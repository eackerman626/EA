import React, { Component } from 'react';
import html2pdf from 'html2pdf.js';
import { saveAs } from 'file-saver';
import { Navbar, Dropdown } from 'react-bootstrap';

class MyNavbar extends Component {
	constructor() {
		super();
		this.handlePdfClick = this.handlePdfClick.bind(this);
		this.handleJsonClick = this.handleJsonClick.bind(this);
	}

	componentDidMount() {}

	handlePdfClick() {
		const element = document.getElementById('app');
		html2pdf(element);
	}

	handleJsonClick() {
		const jsonData = this.props.data;
		const fileName = 'schoolData.json';

		const fileToSave = new Blob([JSON.stringify(jsonData)], {
			type: 'application/json',
			name: fileName,
		});

		saveAs(fileToSave, fileName);
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
						<Dropdown.Item onClick={this.handleJsonClick}>Download Data</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar>
		);
	}
}

export default MyNavbar;
