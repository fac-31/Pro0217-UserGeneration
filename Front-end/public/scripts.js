document.getElementById("characterForm").addEventListener("submit", function (event) {
    event.preventDefault();  

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
    fetch('http://localhost:3000/api/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(characterData),
    })

//NC - .then is required as sequence of parsing info and redirection etc is important
    .then(response => response.json())
    .then(data => {
        console.log("Backend response:", data);
        alert("Cooking up your tortoise!");
    })

//NC - .catch error handling, alert message prompting user to re-enter and check info
    .catch(error => {
        console.error("Error sending data to backend:", error);        
        alert("There was a problem with your ingredients! Please enter your info again.");
    });
});
