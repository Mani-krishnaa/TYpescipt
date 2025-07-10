let age: number = 25;


if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}


//turnary operator
//syntax: condition ? expressionIfTrue : expressionIfFalse
let isAdult: number = 60

isAdult < 30 ? console.log("he is not an adult") : console.log("he is adult");


let weekno: number =333;

switch (weekno) {
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday");
        break;



    default:
        console.log("Invalid num");

}