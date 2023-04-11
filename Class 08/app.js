// const date = new Date();

// console.log(date.getDate()); 
const months = ["January","Feb","mar","Apr"];
// console.log(months[date.getMonth()]);
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getDay());  // Or many more

const doomsDay = new Date();
doomsDay.setDate(10);
doomsDay.setMonth(11);
doomsDay.setFullYear(2025);

const date = new Date();

let diff = doomsDay.getTime() - date.getTime();
console.log(diff / 1000);
// console.log(doomsDay);