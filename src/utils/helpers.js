function formatName(firstName, lastName) {
	return `${firstName} ${lastName}`;
}

function formatDate(date) {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(date).toLocaleDateString(undefined, options);
}

export { formatName, formatDate };
