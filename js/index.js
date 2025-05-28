

function addNumbers(inputNumberOne, inputNumberTwo) {

    console.log("Add");
    console.log("numberOne is: ", inputNumberOne);
    console.log("numberTwo is: ", inputNumberTwo);

        let sum = Number(inputNumberOne) + Number(inputNumberTwo);  //Kan också lösa genom att köra Number(inputNumberOne) så det inte är en sträng utan ne siffra

            console.log("numberOne + numberTwo = " + sum);
}

function subtractNumbers(inputNumberOne, inputNumberTwo) {

    console.log("Subtract");
    console.log("numberOne is: ", inputNumberOne);
    console.log("numberTwo is: ", inputNumberTwo);

        let sum = inputNumberTwo - inputNumberTwo;

            console.log("numberOne - numberTwo = " + sum);
}

let inputNumberOne = prompt("Choose first number");
    console.log("First number: ", inputNumberOne);
const inputOperator = prompt("Addition (+) or subtraction (-)");
    console.log("Operator:", inputOperator);
let inputNumberTwo = prompt("Choose second number");    //parseInt hjälper datorn förstå att det är siffror inte strängar
    console.log("Second number: ", inputNumberTwo);

if (inputOperator == "+") {
    addNumbers(inputNumberOne, inputNumberTwo);
} else if(inputOperator == "-") {
    subtractNumbers(inputNumberOne, inputNumberTwo);
}

// Add Two Numbers Entered by the User
// Use prompt() to get input from the user.

// Convert the input from strings to integers using parseInt()

//This snippet uses the prompt() function to capture user inputs. Since prompt() returns strings, parseInt() is utilized to convert these strings to integers. The numbers are then added, and the result is displayed to the user via alert().