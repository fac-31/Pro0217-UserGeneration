export default async function fetchData() {
	let data;
	try {
		data = await fetch("http://localhost:3000/characters").then((res) =>
			res.json()
		);
	} catch (error) {
		console.error(error);
	}

	return data;
}
