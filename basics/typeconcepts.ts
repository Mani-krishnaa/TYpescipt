//typescript is a statically typed lanuage that is a superset of JavaScript
//Type interface
//t=Type Annotation




let fisrtname: string;

fisrtname = "John"; //type annotation

// fname = boolean  this is called statically typed lanuguage. one if we define with type we cannot change


let tests = "typescript"; // while compaliling it will dicide the type of the variable based on the value that we are defining if we didnt specify the type



let mycity: null = null; // we can give type as null also
let myCountry: undefined = undefined; // we can define type as undefined also


let anyvalue: any = 30; // if we dont know the type of the data we can pass any


//void
function printHello(): void {
    console.log("it is not returning anythong");

}

function getNumber(): Number {
    return 2 //returning number
}
function returnany(): any {
    return 2 //returning anything that if we dont know
}


// we can specify the parametre type also
//parametres is number
// return type is number
function addittion(a: number, b: number): number {
    return a + b;
}

addittion(10, 30)