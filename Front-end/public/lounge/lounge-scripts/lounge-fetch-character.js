export default async function fetchData() {
	let data;
	try {
		data = await fetch("http://localhost:3000/api/characters").then((res) =>
			res.json()
		);
	} catch (error) {
		console.error(error);
	}

	return data;
}
