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
					<Col className="text-left ml-3">
						<h1 id="school_title">
							{data.schoolName} {data.schoolAlias ? '(' + data.schoolAlias + ')' : null}
						</h1>
					</Col>
				</Row>
				<Row>
					<Col className="text-left ml-3 school_info">
						<h5>{data.schoolCity ? data.schoolCity + ', ' + data.schoolState + ' ' + data.schoolZip.slice(0, 5) : null}</h5>
						<h5 className="separator"> | </h5>
						<h5>
							<a href={'http://' + data.schoolSite}>{data.schoolSite}</a>
						</h5>
						<h5 className="separator"> | </h5>
						<h5>{data.schoolTotal ? 'Total students: ' + data.schoolTotal.toLocaleString() : null}</h5>
					</Col>
				</Row>
			</>
		);
	}
}

export default Header;
