// -------- Question no 1

// function add(num) {
//     function addNumber(input) {
//         return num + input;
//     }
//     return addNumber;
// }

// Example with 5

// let addFive = add(5);
// let addIntoClosure = addFive(10);
// console.log(addIntoClosure);

// Example with 10

// let addFive = add(10);
// let addIntoClosure = addFive(10);
// console.log(addIntoClosure);

// arr = [1,2,3,4,5];
// console.log(arr.length)
// ------------ Question no 2

// function searchArray(arr,arrVal,i) {
//     if (i >= arr.length){
//         return false;
//     }
//     if(arr[i] == arrVal) {
//         return true;
//     }
//     return searchArray(arr,arrVal,i+1);
// }

// arr = [1,2,3,4,5];
// let doSome = searchArray(arr,3,0);
// console.log(doSome);


// arr1 = ["Apple","Mango","Orange"];
// let doSOme = searchArray(arr1,"Pineapple",0);
// console.log(doSOme);


// ------ Question no 3

// function addParagraph(text) {
//     const paragraph = document.createElement('p');
//     paragraph.textContent = text;
//     document.body.appendChild(paragraph);
//   }

// Example usage:
//   addParagraph("This is a new paragraph!"); // Adds a new paragraph with the text "This is a new paragraph!" to the bottom of the HTML document


// ---------- Question no 04

// function addText(text) {
//     const paragraph = document.createElement('li');
//     paragraph.textContent = text;

//     const underorderlist = document.getElementById('inList');
//     underorderlist.appendChild(paragraph);
// }

// addText("Home");
// addText("About");


// --------- Question no 05

// function changeColor(elementId,bgColor) {
//     let myPara = document.getElementById(elementId);
//     myPara.style.backgroundColor = bgColor;
//     myPara.style.color = "white";
// }

// changeColor("inList","black");


// ------ Question no 06

// function addObject(keyString, obj) {
//     let prevStudent = localStorage.getItem(keyString); // It get a data from a localStorage
//     let students = prevStudent ? JSON.parse(prevStudent) : [];
//     students.push(obj);
//     console.log(students);
//     let stringify = JSON.stringify(students);
//     localStorage.setItem(keyString, stringify);
    
// }

// let std =  {   // Is method se good hogaya
//     name: prompt("Enter your name :"),
//     course: prompt("Enter your course :"),
//     teacher: prompt("Enter your teacher name :"),
//     rollNo : +prompt("Enter your roll no :")  // When someone reload the page all the data lost for this purpose we use JSON that converts object into string it will be for browser to store data in local Storage
// };

// addObject("Students",std);


// --------- Question no 07

// function retrieveVal(keyString) {
//     let obj = localStorage.getItem(keyString);
//     let students = obj ? JSON.parse(obj) : [];
//     console.log(students);
//     return obj;
// }

// retrieveVal("Students");


// ---------- Question no 08

// function saveObjectToLocalStorage(obj) {
//     // Iterate over the properties of the object
//     for (var prop in obj) {
//       if (obj.hasOwnProperty(prop)) {
//         // Save each property to localStorage using the property name as the key
//         // and the property value as the value
//         localStorage.setItem(prop, JSON.stringify(obj[prop]));
//       }
//     }
  
//     // Retrieve the object from localStorage and create a new object
//     var retrievedObj = {};
//     for (var i = 0; i < localStorage.length; i++) {
//       var key = localStorage.key(i);
//       retrievedObj[key] = JSON.parse(localStorage.getItem(key));
//     }
  
//     // Return the retrieved object as a new object
//     return retrievedObj;
//   }
  
// let objValue = {
//     name : "Ahmed",
//     age : 3,
//     gender : "Male",
//     class : "pre-nursery",
//     teacher : "Sir Ameen"
// }

// console.log(saveObjectToLocalStorage(objValue));
