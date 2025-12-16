

var product = prompt("Hoeveel kost het product dat je wilt kopen?");
let budget = 100;

if (product < budget) {
    document.getElementById("text").innerHTML = "Je hebt genoeg geld om het product te kopen!";
    document.getElementById("text").style.color = "green";
} 

else {
    document.getElementById("text").innerHTML = "Je hebt niet genoeg geld om het product te kopen!";
    document.getElementById("text").style.color = "red";
}

