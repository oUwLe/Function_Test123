
function add(numberOne, numberTwo) {

    console.log("Add");
    console.log("numberOne är: ", numberOne);
    console.log("numberTwo är: ", numberTwo);

        let sum = numberOne + numberTwo;

            console.log("numberOne + numberTwo = " + sum);
}

function subtract(numberOne, numberTwo) {

    console.log("Subtract");
    console.log("numberOne är: ", numberOne);
    console.log("numberTwo är: ", numberTwo);
        let sum = numberOne - numberTwo;

            console.log("numberOne - numberTwo = " + sum);
}

let operator = "add"; {
} 
if (operator == "subtract") {
    subtract(80, 40);
} 
else if (operator == "add") {
    add(40, 40);
}

add(5, 10);
subtract(55, 25);