export default (data) => {
	const yearArray = [];
	for (const year in data) {
		if (parseInt(year) > 0) {
			yearArray.push(parseInt(year));
		}
	}
	return Math.max(...yearArray);
};
