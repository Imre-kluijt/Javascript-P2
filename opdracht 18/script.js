const pass = document.getElementById("pass");
const text = document.getElementById("text");

pass.addEventListener("input", function() {
    const passteller = pass.value;
    let sterkte = "";

    if (passteller.length < 6) {
        sterkte = "Wachtwoord te kort";
        text.style.color = "red";
    }
    else {
        sterkte = "Sterk wachtwoord";
        text.style.color = "green";
    }

    text.textContent = sterkte + " (" + passteller.length + " tekens)";
});