const adviezen = ["wandelen", "mediteren", "een dutje doen", "een kopje thee", "je favoriete boek", "telefoon uitzetten"];

const button = document.getElementById("AdviesButton");
const advies = document.getElementById("advies");

button.addEventListener("click", function() {
    const randomAdvies = Math.floor(Math.random() * 3);
    const randomObject = 3 + Math.floor(Math.random() * 3);
    advies.textContent = "Vandaag moet jij " + adviezen[randomAdvies] + " met " + adviezen[randomObject];
} );