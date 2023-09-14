function addNumbers(num1, num2) {
    console.log(parseInt(num1) + parseInt(num2))
}
let num1 = prompt("Insert any number")
let num2 = prompt("Insert another number")

addNumbers(num1, num2)

function calcNumbers(calc1, calc2, math) {
    if (parseInt(calc1) && parseInt(calc2)) {
        if (math == "+") {
            document.write(parseInt(calc1) + parseInt(calc2))
        } else if (math == "-") {
            document.write(parseInt(calc1) - parseInt(calc2))
        } else if (math == "*") {
            document.write(parseInt(calc1) * parseInt(calc2))
        } else if (math == "/") {
            document.write(parseInt(calc1) / parseInt(calc2))
        }
    }
}

function changeP() {
    document.getElementById("displayText").innerHTML = "Hello World!";
}

function happyEmoji() {
    document.getElementById("changeEmoji").src = "./Images/smile.jpeg"
}

function sadEmoji() {
    document.getElementById("changeEmoji").src = "./Images/sad.jpeg"
}