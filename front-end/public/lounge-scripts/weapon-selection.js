// NC - Fight button extracts weapon choice and console logs - weapon choice picks the battle type 


document.addEventListener("DOMContentLoaded", function () {
    const fightButton = document.getElementById("fightButton"); 

    fightButton.addEventListener("click", function (event) {

        const selectedWeapon = document.querySelector('input[name="weapons"]:checked'); 
        console.log("Selected weapon:", selectedWeapon.value); 
       
    });
});
