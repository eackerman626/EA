export default (schoolPrograms) => {
	const data = [];
	for (const program in schoolPrograms) {
		if (schoolPrograms[program] > 0) {
			const dataObj = {
				count: schoolPrograms[program],
				color: '#151ee4',
				name: program,
			};
			data.push(dataObj);
		}
	}
	return data;
};

// random hex color generator: https://css-tricks.com/snippets/javascript/random-hex-color/

// 		const data = [
//     {
//         count: 20, // Value of the property. Required.
//         color: '#0000FF', // Color code for the pie's color. Required.
//         name: 'Blue', // Optional value. Used to display in the tooltip.
//     },
// ];

// schoolPrograms = {
//     agriculture: .024,
//     architecture: .033,
//     biology: .17,
//     ...
// }
