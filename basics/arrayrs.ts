// Array of numbers
//collextion of similar types of data

let nam: string[] = [" mani", "mani1"]
console.log(nam);


//using generics
//generics means we can define the type of the array at the time of defining the array
let numArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numArray);
let employeeNames: Array<string> = [" mani", "mani1", " mani2", "mani3"];
console.log(employeeNames);

let empDetails: Array<any> = [1, "mk", 103]
console.log(empDetails);


//multi type arrays
let values: (string | number)[] = ["tom", 100]

//declaration and init
let manidetails: Array<string>;
manidetails = ['" mani", "mani1", " mani2", "mani3"']