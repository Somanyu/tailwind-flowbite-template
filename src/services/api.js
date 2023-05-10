/* eslint-disable no-undef */
const BASE_URL = process.env.REACT_APP_API_URL;

async function fetchTodos() {
	try {
		const response = await fetch(`${BASE_URL}/todos`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching todos:", error);
		throw error;
	}
}

export { fetchTodos };
