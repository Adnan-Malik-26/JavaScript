//* Conditional Statements

// let age =25;

// if (age >= 18) {
//     console.log("You can Vote");
// }

// let num = 19;

// if (num%2===0) {
//     console.log("Number",num,"is Even");
// } else {
//     console.log("Number",num,"is Odd");
// }


//syntax -> rules on how to write the code


// let mode = 'dark';

// let color;

// if (mode ==='dark') {
//     color = 'black';
// } else if(mode === 'white'){
//     color = 'white';
// } else{
//     color = 'default';
// }

//! Ternary Operators

// let age = 15;

// let result = age>=18 ? "adult": "not adult"

// console.log(result)


//* SWITCH STATEMENT

const expr = "mango";

switch (expr) {
    case "MANGO":
        console.log("Mangoes are 8.50 a pound")
        break;
    case "ORANGE":
        console.log("Oranges are 10 a pound")
        break;
    case "BANANA":
        console.log("Bananas are 60 for a dozen");
        break;
    default:
        console.log("We don't have it in stock");
        break;
}