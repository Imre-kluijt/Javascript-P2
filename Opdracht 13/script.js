
var leeftijd = prompt("Wat is je leeftijd?");



if (leeftijd >= 18 && leeftijd < 65) {
    document.getElementById("text").innerHTML = "Welkom!";
    document.getElementById("text").style.color = "green";
} 

else if (leeftijd >= 65) {
    document.getElementById("text").innerHTML = "Welkom, senior bezoeker!";
    document.getElementById("text").style.color = "orange";
}

else {
    document.getElementById("text").innerHTML = "Je mag hier nog niet naarbinnen!";
    document.getElementById("text").style.color = "red";
}