let time = prompt("What time is it?");

if (time <= 11) {
    document.body.style.backgroundColor = "#FFDCC4";
} else if (time <=17) {
    document.body.style.backgroundColor = "#E5A67A";
} else if (time <= 23) {
    document.body.style.backgroundColor = "#A1653B";
} else {
    alert("That's not a valid time!");
}