import randomColor from 'randomcolor';

export default (schoolPrograms) => {
	const data = [];
	for (const program in schoolPrograms) {
		if (schoolPrograms[program] > 0) {
			const dataObj = {
				count: schoolPrograms[program],
				color: randomColor({ hue: 'blue' }),
				name: capitalize(program),
			};
			data.push(dataObj);
		}
	}
	data.sort((a, b) => {
		if (a.count > b.count) {
			return 1;
		} else return -1;
	});

	return data;
};

const capitalize = (str) => {
	const wordsAry = str.split('_');
	const capWordsAry = wordsAry.map((word) => {
		return word[0].toUpperCase() + word.slice(1);
	});
	return capWordsAry.join(' ');
};
