import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, Container, Row, Col, Dropdown } from 'react-bootstrap';

class School extends Component {
	constructor() {
		super();
		this.state = {
			schoolName: '',
		};
	}

	async componentDidMount() {
		try {
			const schoolData = await axios.get(
				'https://api.data.gov/ed/collegescorecard/v1/schools?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=VfF1Gp7WmXYOJGXJHD0YSfuG1dP9cOmGqcNKIOwf'
			);
			console.log('this is what my school data looks like: ', schoolData.data.results);
			this.setState({ schoolName: schoolData.data.results[0].school.name });
			console.log('this is the state: ', this.state);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<Container fluid>
				<Navbar expand="lg" variant="light" bg="light" className="justify-content-between">
					<Navbar.Brand href="/">Brand</Navbar.Brand>
					<Dropdown>
						<Dropdown.Toggle>Menu</Dropdown.Toggle>
						<Dropdown.Menu alignRight>
							<Dropdown.Item>Print</Dropdown.Item>
							<Dropdown.Item>Save as PDF</Dropdown.Item>
							<Dropdown.Item>Download Data</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar>
				<Row>
					<Col>
						<h2 className="text-center">{this.state.schoolName}</h2>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default School;
