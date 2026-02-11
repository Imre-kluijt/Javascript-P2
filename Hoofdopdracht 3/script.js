const antwoorden = [
  "Waarschijnlijk wel.",
  "Misschien.",
  "Het zou kunnen.",
  "Grote kans van wel.",
  "Kleine kans.",
  "Gegarandeerd.",
  "Het antwoord is onduidelijk.",
  "Ja… maar niet meteen.",
  "Nee… tenzij je iets verandert.",
  "Onmogelijk."
];

const button = document.getElementById("vraagbutton");
const antwoord = document.getElementById("antwoord");
const vraagtext = document.getElementById("vraagtext");

const herhaalvraag = document.getElementById("herhaalvraag");
const scherm1 = document.getElementById("scherm1");
const scherm2 = document.getElementById("scherm2");
const opnieuwbutton = document.getElementById("opnieuwbutton");

scherm1.style.display = "flex";
scherm1.style.flexDirection = "column";
scherm1.style.alignItems = "center";  
scherm1.style.textAlign = "center";
scherm1.style.minHeight = "100vh";    
scherm1.style.justifyContent = "flex-start";
scherm1.style.paddingTop = "50px";


scherm2.style.flexDirection = "column";
scherm2.style.alignItems = "center";
scherm2.style.justifyContent = "center";
scherm2.style.height = "400px";
scherm2.style.textAlign = "center";
scherm2.style.padding = "30px";
scherm2.style.width = "400px";            
scherm2.style.backgroundColor = "#fff";   
scherm2.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)"; 
scherm2.style.borderRadius = "15px";      
scherm2.style.margin = "50px auto";       

let laatsteantwoord = -1;

button.addEventListener("click", function() {

    if (vraagtext.value.trim() === "") {
        fout.textContent = "Typ eerst een vraag";
        fout.style.color = "red";
        return;  
    }
    
    
    let randomantwoord;
    do {
        randomantwoord = Math.floor(Math.random() * antwoorden.length);
    } while (randomantwoord === laatsteantwoord);

    laatsteantwoord = randomantwoord;

    antwoord.textContent = antwoorden[randomantwoord];

    if (randomantwoord === 8 || randomantwoord === 9) {
        antwoord.style.color = "red";
    } else if (randomantwoord === 3 || randomantwoord === 0 || randomantwoord === 5) {
        antwoord.style.color = "green";
    } else {
        antwoord.style.color = "orange";
    }
     

    herhaalvraag.textContent = vraagtext.value;
    scherm1.style.display = "none";
    scherm2.style.display = "block";
});

opnieuwbutton.addEventListener("click", function() {
    vraagtext.value = "";
    antwoord.style.color = "black";
    scherm2.style.display = "none";
    scherm1.style.display = "block";
    fout.textContent = "";
});