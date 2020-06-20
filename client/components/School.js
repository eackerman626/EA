import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import Navbar from './Navbar';
import Header from './Header';
import DonutChart from './DonutChart';
import mostRecentYear from '../../utils/mostRecentYear';

class School extends Component {
	constructor() {
		super();
		this.state = {
			data: {},
		};
	}

	async componentDidMount() {
		try {
			const response = await axios.get(
				'https://api.data.gov/ed/collegescorecard/v1/schools?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=VfF1Gp7WmXYOJGXJHD0YSfuG1dP9cOmGqcNKIOwf'
			);
			const schoolData = response.data.results[0];
			const year = mostRecentYear(schoolData);
			const data = {
				schoolName: schoolData.school.name,
				schoolSite: schoolData.school.school_url,
				schoolCity: schoolData.school.city,
				schoolState: schoolData.school.state,
				schoolZip: schoolData.school.zip,
				schoolAlias: schoolData.school.alias,
				schoolTotal: schoolData[year].student.size,
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
				<Header data={this.state.data} />
				<Row>
					<Col>
						<DonutChart data={this.state.data} />
					</Col>
					<Col>
						<DonutChart data={this.state.data} />
					</Col>
					<Col>
						<DonutChart data={this.state.data} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default School;
