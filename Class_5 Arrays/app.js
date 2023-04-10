// Arrays is use for managing large data of same nature

// Syntax for making an array

// let months = ["January","February","Pakistan","March","April","May","June","July","August","September","October","November","December"];
    // console.log(months)

// ------------------ It is same as java

// for (let i=0; i<months.length; i++){
//     console.log(months[i]);
// }


// ===============By asking user to put your input in array or not

// let shouldIstore = prompt("Array me value dalun :")

// if(shouldIstore === "yes"){
//     months.push("User Value"); // Push function value array k last index mein daldega
// }


// ---------- Exploring different functions of arrays ----------------------

// months.shift(); // shift array ki first index ki value to shart karadeta h
// months.unshift("January");  // Adding value on 1st index
// months.push("push value"); // Push add value on last index
// months.pop(); // pop remove last index value
// months.length; // length index starts from 1 (Length is a quantity)
// months.splice(2,5); (no of index where it starts deleting, no of values for deleting)
// months.splice(2,1,"June","July");  it is also use for replacing values
// let newArr = months.slice(0 , 3); It makes a copy of array where you want (starting,ending)

// console.log(months);
// console.log(newArr)

// ----- Extracting values with the help of loop


// let arr = ["Apple","Mango","Orange"];

//  ------ For each loop takes one anonymous function and return the values of array
// arr.forEach(function(val,index,arr) {  // Arguments name are not fix (Third argument is !99 used)
//     console.log(index,val,arr);
// });

// ------- Filter only give a values that fullful the condition 
// let filterArray = arr.filter(function (val) {
//     return val % 2===0;  // Condition  
//     // if (val %2 ==0){
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
// })


// ----- Ab tk jitne bhi functions pare h flterArray sort forEach loop sub ko use karne k lye anonymous function use hota h

let arr = [1,23,3,4,0,6,89,8,12,10];
let sortedArray = arr.sort(function(a,b) {
    if (a > b) {  // For reverse sorting condition should be reverse
        return 1;
    }
    else {
        return -1;
    }
})
console.log(sortedArray)