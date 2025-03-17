export default async function fetchData() {
	let data;
	try {
		data = await fetch("/characters").then((res) => //http://localhost:3000/characters
			res.json()
		);
	} catch (error) {
		console.error(error);
	}

	return data;
}
