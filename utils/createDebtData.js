import randomColor from 'randomcolor';

export default (debtPercent) => {
	return [
		{
			count: debtPercent,
			color: randomColor({ hue: 'blue' }),
			name: 'With Federal Debt',
		},
		{
			count: 1 - debtPercent,
			color: randomColor({ hue: 'blue' }),
			name: 'Without Federal Debt',
		},
	];
};
