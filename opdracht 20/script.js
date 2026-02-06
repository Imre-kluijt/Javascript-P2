const emojis = ["😀", "😂", "😍", "😎", "🤔", "🙌"];

const button = document.getElementById("emojiButton");
const emojitoon = document.getElementById("emoji");

button.addEventListener("click", function() {
    const randomemoji = Math.floor(Math.random() * emojis.length);
    emojitoon.textContent = `${emojis[randomemoji]} ${randomemoji}`;
} );