var drankje = prompt("Welk drankje wil je bestellen? (Cola, Water en Koffie");

if (drankje === "Cola" || drankje === "cola") {
    document.getElementById("text").innerHTML = "Je krijgt een blikje cola 🥤";
    document.getElementById("text").style.color = "red";
}
else if (drankje === "Water" || drankje === "water") {
    document.getElementById("text").innerHTML = "Goed bezig, lekker gezond 💧";
    document.getElementById("text").style.color = "blue";
}
else if (drankje === "Koffie" || drankje === "koffie") {
    document.getElementById("text").innerHTML = "Energie incoming ☕";
    document.getElementById("text").style.color = "brown";
}

else {
    document.getElementById("text").innerHTML = "Dat drankje is helaas op";
    document.getElementById("text").style.color = "grey";
}