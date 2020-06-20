import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import Navbar from './Navbar';
import Header from './Header';
import DonutChart from './DonutChart';
import mostRecentYear from '../../utils/mostRecentYear';
import createData from '../../utils/createData';
import createDebtData from '../../utils/createDebtData';

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
				schoolPrograms: createData(schoolData[year].academics.program_percentage),
				schoolDemographics: createData(schoolData[year].student.demographics.race_ethnicity),
				schoolDebt: createDebtData(schoolData[year].aid.federal_loan_rate),
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
						{/* {text-align: center} */}
						{this.state.data.schoolPrograms ? <DonutChart data={this.state.data.schoolPrograms} /> : null}
						{this.state.data.schoolDemographics ? <DonutChart data={this.state.data.schoolDemographics} /> : null}
						{this.state.data.schoolDebt ? <DonutChart data={this.state.data.schoolDebt} /> : null}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default School;
