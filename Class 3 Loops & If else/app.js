// Comparision operators
// ==
// console.log(5==5);
// console.log(5=="5");

// ====
// It also compare the type of element
// console.log(5==="5");

// != , !==

// console.log(5!==6);

// > < >= <=

// let a = 4;
// let b = 3;
// console.log(a > b);


// ------------ If else -------------------
// + for converting string into integer it is similar to the python input which take any input in string
// let user = +prompt("Enter your age");

// if (user >= 18) {
//     console.log("You are eleigible for this");
// }
// else {
//     console.log("Sorry ! you are not elegible for voting");
// }


// ----------------- Number guess  Game --------------------------------------- 

// let user = +prompt("Enter your number :");
// let computerNum = Math.round(Math.random() * 10);

// if (user === computerNum) {
//     console.log("Congratulations you guess a wright number ")
// }
// else {
//     console.log("Sorry You lose :"+computerNum)
// }



// let user = prompt("Even or odd :");
// let computerNum = Math.round(Math.random() * 10);

// if ((computerNum%2===0) && (user==="even")) {
//         console.log("Congratulations you guess a wright number that is even:"+computerNum)
//     }
// else if ((computerNum%2!==0) && (user==="odd")) {
//     console.log("Congratulations you guess a wright number that is odd:"+computerNum)
// }
//     else {
//         console.log("Sorry You lose :"+computerNum)
//     }


// ------------------------- FOr loop ------------------

for (let i=1; i<=10; i++){
    console.log("Hello moto");
}