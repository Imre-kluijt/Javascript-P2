const text = document.getElementById("text");

text.addEventListener("click", function() {
    if (text.style.color === "red") {
        text.style.color = "black";
        document.body.style.backgroundColor = "white";
    } else {
        text.style.color = "red";
        document.body.style.backgroundColor = "black";
    }
});
