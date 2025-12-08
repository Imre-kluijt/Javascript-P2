let TextMessage = document.getElementById("TextMessage");
let lightbtn = document.getElementById("lightbtn");
let darkbtn = document.getElementById("darkbtn");



function lightmode() {
    
    TextMessage.innerHTML = "Goedendag";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("lightbtn").style.backgroundColor = "white";
    document.getElementById("lightbtn").style.color = "black";
    document.getElementById("darkbtn").style.backgroundColor = "white";
    document.getElementById("darkbtn").style.color = "black";
}


function darkmode() {
    
    TextMessage.innerHTML = "Goedenavond";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("lightbtn").style.backgroundColor = "black";
    document.getElementById("lightbtn").style.color = "white";
    document.getElementById("darkbtn").style.backgroundColor = "black";
    document.getElementById("darkbtn").style.color = "white";
}