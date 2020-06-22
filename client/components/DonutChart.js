import React, { Component } from 'react';
import DonutChart from 'react-d3-donut';

class MyDonut extends Component {
	render() {
		const data = this.props.data;
		return <DonutChart innerRadius={75} outerRadius={150} transition={true} svgClass="svg-class" pieClass={this.props.pieClass} displayTooltip={true} strokeWidth={2} data={data} />;
	}
}

export default MyDonut;
