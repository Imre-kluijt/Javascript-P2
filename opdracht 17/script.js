const blok = document.getElementById("blok");
const tekst = document.getElementById("tekst");


blok.style.width = "200px";
blok.style.height = "200px";
blok.style.backgroundColor = "blue";
tekst.style.fontSize = "48px";


blok.addEventListener('mouseover', function() {
    blok.style.backgroundColor = "red";
    blok.style.width = "300px";
    blok.style.height = "200px";
    tekst.innerHTML = "2";
    blok.style.transition = "all 0.5s";
});


blok.addEventListener('mouseout', function() {
    blok.style.backgroundColor = "blue";
    blok.style.width = "200px";
    blok.style.height = "200px";
    tekst.innerHTML = "1";
});