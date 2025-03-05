//NC - Intruder appears Module

document.addEventListener("DOMContentLoaded", function () {
    const fieldset = document.getElementById("intruder");
    const submitButton = document.getElementById("intruder-button");

//NC - Submit button shows the fieldset which is hidden until click
    submitButton.addEventListener("click", function (event) {
        setTimeout(() => {
            fieldset.style.display = "block";
        }, 2000);
    });
});

