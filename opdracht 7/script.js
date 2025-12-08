let lightbtn = document.getElementById("aanpasbtn");

function kleur_aanpassen() {
    document.getElementById("tekst").style.color = "red";
    document.getElementById("aanpasbtn").style.backgroundColor = "white";
    document.getElementById("aanpasbtn").style.color = "black";
    document.getElementById("tekst").innerText = "inhoud aangepast!";
}

