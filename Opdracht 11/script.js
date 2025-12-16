let budget = 100;
let product = 60;

if (budget >= product) {
    document.getElementById("text").innerHTML = "U heeft genoeg geld!";
    document.getElementById("text").style.color = "green";
} 

else {
    document.getElementById("text").innerHTML = "Helaas, te weinig geld";
    document.getElementById("text").style.color = "red";
}