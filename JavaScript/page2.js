function happyEmoji() {
    document.getElementById("changeEmoji").src = "./Images/smile.jpeg";
}

function sadEmoji() {
    document.getElementById("changeEmoji").src = "./Images/sad.jpeg";
}

function setDate() {
    document.getElementById("dateChanger").innerHTML = "Date: " + Date();
}