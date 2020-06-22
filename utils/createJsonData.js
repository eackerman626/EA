export default (data) => {
	data.schoolPrograms.forEach((el) => deleteColor(el));
	data.schoolDemographics.forEach((el) => deleteColor(el));
	data.schoolDebt.forEach((el) => deleteColor(el));
	return data;
};

const deleteColor = (obj) => {
	delete obj.color;
};
