//var keyword
// The `var` keyword is used to declare variables in TypeScript. Variables declared with `var` are function-scope within in the function we can acces
//if we declare literlas with var keyword outside of the function then it is global variable
// we can update the value of the variable declared with `var` keyword

function varScope() {


    if (true) {
        var x = 100
        console.log(x);
        x: String;// we can change the type of the variable declared with `var` keyword
        x = 200; // we can update the value of the variable declared with `var` keyword

    }
    console.log(x);

}


// let
// The `let` keyword is used to declare block-scoped variables in TypeScript. Variables declared with `let` are only accessible within the block they are defined in.
// If we declare variables with `let` inside a block, they are not accessible outside that block, even if the block is within a function.
// If we declare variables with `let` outside of a function, they are still block-scoped, but they can be accessed in the global scope if defined at the top level.
let m = 25
m = 35
function letScope() {



    if (true) {
        let x = 100
        console.log(x);


    }
    console.log(x);

}

//const
// The `const` keyword is used to declare block-scoped constants in TypeScript. Variables declared with `const` must be initialized at the time of declaration and cannot be reassigned.
// If we declare variables with `const` inside a block, they are not accessible outside that block,
const x: number = 100;
console.log(x);
