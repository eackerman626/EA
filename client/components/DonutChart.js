import React, { Component } from 'react';
import DonutChart from 'react-d3-donut';
import { Card } from 'react-bootstrap';

class MyDonut extends Component {
	render() {
		const data = this.props.data;
		return (
			<Card className="pie_container m-1">
				<Card.Title className="pie_title">{this.props.title}</Card.Title>
				<Card.Body>
					<DonutChart innerRadius={75} outerRadius={150} transition={true} svgClass="svg-class" pieClass={this.props.pieClass} displayTooltip={true} strokeWidth={2} data={data} />
				</Card.Body>
			</Card>
		);
	}
}

export default MyDonut;
