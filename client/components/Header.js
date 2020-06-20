import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

class Header extends Component {
	constructor() {
		super();
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	componentDidMount() {}

	handleButtonClick() {}

	render() {
		const data = this.props.data;
		return (
			<>
				<Row>
					<Col className="text-center">
						<h2>
							{data.schoolName} {data.schoolAlias ? '(' + data.schoolAlias + ')' : null}
						</h2>
					</Col>
				</Row>
				<Row>
					<Col className="text-center">
						<h5>{data.schoolCity ? data.schoolCity + ', ' + data.schoolState + ' ' + data.schoolZip : null}</h5>
					</Col>
				</Row>
				<Row>
					<Col className="text-center">
						<a href={'http://' + data.schoolSite}>{data.schoolSite}</a>
					</Col>
				</Row>
				<Row>
					<Col className="text-center">
						<h5>{data.schoolTotal ? 'Total students: ' + data.schoolTotal.toLocaleString() : null}</h5>
					</Col>
				</Row>
			</>
		);
	}
}

export default Header;
