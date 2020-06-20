import React, { Component } from 'react';
// import rd3 from 'react-d3-library';
import DonutChart from 'react-d3-donut';
// const DonutChart = rd3.PieChart;

class MyDonut extends Component {
	constructor() {
		super();
	}

	componentDidMount() {}

	render() {
		// const data = [
		// 	{
		// 		count: 20, // Value of the property. Required.
		// 		color: '#0000FF', // Color code for the pie's color. Required.
		// 		name: 'Blue', // Optional value. Used to display in the tooltip.
		// 	},
		// 	{
		// 		count: 10, // Value of the property. Required.
		// 		color: '#00FF00', // Color code for the pie's color. Required.
		// 		name: 'Green', // Optional value. Used to display in the tooltip.
		// 	},
		// ];
		const data = this.props.data;
		return <DonutChart innerRadius={70} outerRadius={100} transition={true} svgClass="example6" pieClass="pie6" displayTooltip={true} strokeWidth={3} data={data} />;
	}
}

export default MyDonut;
