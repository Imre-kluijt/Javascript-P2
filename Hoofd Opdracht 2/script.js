var pizzaa = 0;
const pizzateller = document.getElementById("pizza");
const playBtn = document.getElementById("play");
const addBtn = document.getElementById("addPizza");

document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";
pizzateller.style.fontSize = "50px";
addBtn.style.fontSize = "20px";
playBtn.style.fontSize = "20px";

addBtn.onclick = function() {
    pizzaa++;
    pizzateller.innerHTML = pizzaa + " pizza's 🍕";
    document.body.style.backgroundColor = "white";

    if (pizzaa >= 1) { pizzateller.style.color = "green"; }
    if (pizzaa >= 2) { pizzateller.style.color = "yellow"; }
    if (pizzaa >= 4) { pizzateller.style.color = "orange"; }
    if (pizzaa >= 7) { pizzateller.style.color = "red"; }

    if (pizzaa >= 10) {
        pizzateller.style.color = "purple";
        pizzateller.innerHTML = "YOU WON! 🎉🍕";
        pizzateller.style.fontWeight = "bold";
        document.body.style.backgroundColor = "black";
        playBtn.style.display = "block";
        addBtn.style.display = "none";
    }
};

playBtn.onclick = function() {
    pizzaa = 0;
    pizzateller.innerHTML = pizzaa + " pizza 🍕";
    pizzateller.style.color = "black";
    document.body.style.backgroundColor = "white";
    playBtn.style.display = "none";
    addBtn.style.display = "block";
    
    
};
