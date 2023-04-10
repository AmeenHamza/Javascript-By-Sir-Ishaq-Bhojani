// Question no 1 (Find greater number)

// num1 = +prompt("Enter first number :");
// num2 = +prompt("Enter second number :");

// if (num1 > num2) {
//     console.log("Number 1 is greater :"+num1)
// }
// else {
//     console.log("Number 2 is greater :"+num2)
// }


// Question no 2 

// num1 = +prompt("Enter first number :");

// if (num1 < 0) {
//     console.log("The sign is negative :"+num1)
// }
// else {
//     console.log("The sign is positive :"+num1)
// }


// Question no 3

// num1 = +prompt("Enter first number :");
// num2 = +prompt("Enter second number :");
// num3 = +prompt("Enter third number :");
// num4 = +prompt("Enter fourth number :");
// num5 = +prompt("Enter fifth number :");

// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//     console.log(num1)
// }
// else if(num2 > num3 && num2 > num1 && num2 > num4 && num2 > num5){
//     console.log(num2)
// }
// else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
//     console.log(num3)
// }
// else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
//     console.log(num4)
// }
// else {
//     console.log(num5)
// }


// Question no 4

// for (let i=0; i<15; i++){
//     if (i%2==0){
//         console.log("This is even number."+i);
//     }
//     else {
//         console.log("This is odd number."+i);
//     }
// }

// Question no 5

// num1 = +prompt("Enter You marks :");

// if (num1 >= 90 && num < 100 ){
//     console.log("You got A grade");
// }
// else if (num1 >=80 && num1 < 90){
//     console.log("You got B grade");
// }
// else if (num1 >=70 && num1 < 80){
//     console.log("You got C grade");
// }
// else if (num1 >=60 && num1 < 70){
//     console.log("You got D grade");
// }
// else if (num1 >=50 && num1 < 60){
//     console.log("You got E grade");
// }
// else {
//     console.log("You got F grade");
// }



// Question no 6

for (let i=0; i<100; i++){
    if(i%3==0 && i%5==0){
        console.log("BIzzFizz");
    }
    else if (i%5==0){
        console.log("Bizz");
    }
    else if (i % 3==0){
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}


// Question no 7

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);