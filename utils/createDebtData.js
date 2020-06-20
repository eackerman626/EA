// receive just a percentage of students withd debt
export default (debtPercent) => {
	return [
		{
			count: debtPercent,
			color: '#0000FF',
			name: 'With Federal Debt',
		},
		{
			count: 1 - debtPercent,
			color: '#00FF00',
			name: 'Without Federal Debt',
		},
	];
};
