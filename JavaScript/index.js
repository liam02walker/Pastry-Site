function bgChange() {
    let time = prompt("What time is it? 0-23");

    if (time <= 11 & time >= 0) {
        document.body.style.backgroundColor = "#FFDCC4";
    } else if (time <= 17 & time >= 0) {
        document.body.style.backgroundColor = "#E5A67A";
    } else if (time <= 23 & time >= 0) {
        document.body.style.backgroundColor = "#A1653B";
    } else {
        alert("That's not a valid time!");
        bgChange();
    }
}

function askName() {
    let username = prompt("What is your name?")

    if (username) {
        document.write("Hello " + username)
    } else {
        alert("Please enter a name!");
        askName()
    }
}

function ShowAndHide() {
    let rightList = document.getElementById("methodList");
    if (rightList.style.display == "none") {
        rightList.style.display = "block";
    } else {
        rightList.style.display = "none";
    }
}

function ShowAndHide2() {
    let leftList = document.getElementById("methodList2");

    if (leftList.style.display == "none") {
        leftList.style.display = "block";
    } else {
        leftList.style.display = "none";
    }
}

function rateMe() {
    let stars = prompt("Rate me from 1-5", "5");

    while (!(stars > 0 & stars <= 5)) {
        stars = prompt("Not quite. Rate me 1-5");
    }

    for (let i = 0; i < stars; i++) {
        document.write("<img id='starsImg' src='./star.png'/>");
    }
}