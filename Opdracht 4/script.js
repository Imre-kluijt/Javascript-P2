
let geboortejaar = prompt("Wat is je geboortejaar?");

geboortejaar = Number(geboortejaar);

let leeftijd = 2025 - geboortejaar;

console.log("De leeftijd in 2025 is: " + leeftijd);

document.getElementById("tekst").innerText = "Je bent ongeveer " + leeftijd + " jaar oud";