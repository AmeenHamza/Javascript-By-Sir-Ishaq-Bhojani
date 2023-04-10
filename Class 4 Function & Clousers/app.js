// functions

// Custom functions
// function great(){
//     console.log("This is the function")
// }
// // Custom functions
// function greet (name) {  // Parameter
//     console.log("Hy :"+name)
// }

// function employee (fileNo) {  // Parameter
//     return "Hy you are working on file no :"+fileNo;
// }

// Calling a function

// great();
// greet("Ameen Hamza"); // Argument
// greet("Yousuf");   // Argument

// let data = employee(34);
// console.log(data);


// function add(num1,num2){
//     return num1 + num2;
// }

// let out = add(3,5);
// console.log(out);
// document.write(out);



// --------------- Recursion ------------------

// function writeData(data,time) {
//     document.write(data);
//     if (time > 0) {
//         writeData(data , time-1);
//     }
// }

// // writeData("hello",5);

// function factorial(num){
//     if (num > 1) {
//         return num * factorial(num-1);
//     }
//     return 1;
// }

// console.log(factorial(5));


// Closures

let abx = 7; 
function print() {  // Global scope
    let def = 14;
    return function(){
        console.log(abx);
    }
}

console.log(print());