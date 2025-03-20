/* document
	.getElementById("characterForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		//NC- generate a random 4 digit number to use as UserID - to help with making sure the weapon selection is saved. Placeholder that can be changed
		//const userId = Math.floor(Math.random() * 9000) + 1000;

		//NC - extract values from form
		const name = document.getElementById("name").value;
		const biography = document.getElementById("biography").value;

		//NC - information from radio buttons extracted differently
		const skin = document.querySelector('input[name="skin"]:checked').value;
		const hat = document.querySelector('input[name="hat"]:checked').value;
		const outfit = document.querySelector('input[name="outfit"]:checked').value;
		const boots = document.querySelector('input[name="boots"]:checked').value;

		//NC - extracted information turned into Javascript object
		const characterData = { name, biography, skin, hat, outfit, boots };

		//NC - convert javascript object into JSON and send to backend
		fetch("/characters", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(characterData),
		})
			//NC - .then is required as sequence of parsing info and redirection etc is important
			.then((response) => response.json())
			.then((data) => {
				console.log("backend response:", data);

			// Store userId in localStorage
			if (data.userId) {
				localStorage.setItem("currentUserId", data.userId);
				console.log("User ID stored:", data.userId);
			}

			console.log("localStorage before redirect:", localStorage.getItem("currentUserId"));

			setTimeout(() => {
				alert("Success!");
				//window.location.href = `/lounge/lounge.html`;
			}, 500); // Delay test to allow user id to be stored before redirect
		

			})

			//NC - .catch error handling, alert message prompting user to re-enter and check info
			.catch((error) => {
				console.error("Error sending data to backend:", error);
				alert("api call failed");
			});
	});
 */