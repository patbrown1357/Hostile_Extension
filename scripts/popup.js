var responses = [
    "LOL JK",
    "Nice Try",
    "Poindexter",
    " > : )",
    "Kick Me",
    "super secret"
]

document.getElementById("offButton").addEventListener("click", hideOff);
document.getElementById("review").addEventListener("click",reviewResponse);

function hideOff() {
    var n = Math.floor(Math.random() * (responses.length - 1));
    document.getElementById("offButton").innerText = responses[n];
}

function reviewResponse() {
    var n = Math.floor(Math.random() * (responses.length - 1));
    document.getElementById("review").innerText = responses[n];
}
