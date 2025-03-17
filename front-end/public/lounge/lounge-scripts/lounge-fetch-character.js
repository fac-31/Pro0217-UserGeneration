export default async function fetchData() {
	let data;
	try {
		data = await fetch("/characters").then((res) =>
			res.json()
		);
	} catch (error) {
		console.error(error);
	}

	return data;
}
