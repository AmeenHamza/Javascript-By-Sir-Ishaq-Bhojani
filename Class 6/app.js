// ----- Objects
// It is similar to the dictionary in java or python
// --------------- Method (A function which is present in the object or part of a object)
// ----------- Function (A simple function)


let person = {  // person = object 
    name: "Ameen",  // name : "Ameen" = property
    cnic: 1234567,  // cnic = key
    studentOrNot: true, // true = value
    fatherName: "Abid Hussain",
    speak: function (sentence) {
        console.log(sentence, this.name); // This follows the oops principal (this.)
    }
}

let person1 = {
    name: "Nadir",
    cnic: 1234567,
    studentOrNot: true,
    fatherName: "Abid Hussain",
    speak: function (sentence) {
        console.log(sentence, this.name); // This follows the oops principal (this.)
    }
}
// person1.speak("Hello i'am :");
// person.speak("Hello i'am :");
// console.log(person.name);
// console.log(person.studentOrNot);

// let student1 = {    // Like this you can make 100s of students and the data of all in array of students
//     name: "Bacha",
//     course: "Javascript",
//     teacher: "Sir ishaq bhojani"
// }
// let student2 = {    // Like this you can make 100s of students and the data of all in array of students
//     name: "Acha",
//     course: "Css",
//     teacher: "Sir ishaq bhojani"
// }
// let students = [student1, student2];
// console.log(students);

// ------ It is also used with function -----------

// function provideStudent() {
//     return {
//         name: "Ameen",
//         course: "Css",
//         teacher: "Sir ishaq bhojani",
//         rollNo : 4875
//     }
// }      But this method is not useful becauese same value will be repeat again and again


// function provideStudent(name,course,teacher,rollNo) {
//     return {   // Is method se good hogaya
//         name: prompt("Enter your name :"),
//         course: prompt("Enter your course :"),
//         teacher: prompt("Enter your teacher name :"),
//         rollNo : +prompt("Enter your roll no :")
//     }
// }  

// // let user = prompt("Enter your name :");
// let students = [
//     provideStudent(),
//     provideStudent(),
//     provideStudent()
// ];

let prevStudent = localStorage.getItem("Students");  // After saving the data in local storage students return null array for this purpose first we get the values from local storage and convert into object type and check in this storage data is present or not 
let students = prevStudent ? JSON.parse(prevStudent) : []; // This is the single line if else
function provideStudent() {
        let std =  {   // Is method se good hogaya
            name: prompt("Enter your name :"),
            course: prompt("Enter your course :"),
            teacher: prompt("Enter your teacher name :"),
            rollNo : +prompt("Enter your roll no :")  // When someone reload the page all the data lost for this purpose we use JSON that converts object into string it will be for browser to store data in local Storage
        };
        students.push(std);
        console.log(students);
        let stringify = JSON.stringify(students);
        localStorage.setItem("Students",stringify);
    }

// Browser provides storage for storing data
// localStorage.setItem("name","Ameen");
