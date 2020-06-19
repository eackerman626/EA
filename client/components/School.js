import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import Navbar from './Navbar';

class School extends Component {
	constructor() {
		super();
		this.state = {
			data: {},
		};
	}

	async componentDidMount() {
		try {
			const schoolData = await axios.get(
				'https://api.data.gov/ed/collegescorecard/v1/schools?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=VfF1Gp7WmXYOJGXJHD0YSfuG1dP9cOmGqcNKIOwf'
			);
			const data = {
				schoolName: schoolData.data.results[0].school.name,
				schoolSite: schoolData.data.results[0].school.school_url,
				schoolCity: schoolData.data.results[0].school.city,
				schoolState: schoolData.data.results[0].school.state,
				schoolZip: schoolData.data.results[0].school.zip,
				schoolAlias: schoolData.data.results[0].school.alias,
			};
			this.setState({ data: data });
			console.log('this is the state: ', this.state);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<Container fluid>
				<Navbar data={this.state.data} />
				<Row>
					<Col>
						<h2 className="text-center">{this.state.data.schoolName}</h2>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default School;
