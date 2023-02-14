export const formatDate = (date) => {
	const { year, month, day } = date.split("-")
	return new Date(year, month-1, day);
}