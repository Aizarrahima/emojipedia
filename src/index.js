import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    < App />
  </React.StrictMode>, document.getElementById("root"));




// var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map(x => x * x); 
// (x => x * x) inline code with multiplying by itself (x * x)
// => is fat arrow
// if in the parameters have 2 variable, write : (x, y), if in the variabel have 1 variable, just write: x

// console.log(newNumbers);



//Map - Create a new array by doing something with each item in an array.
// var numbers = [3, 56, 48, 5];

// function double(x) {
//     return x * 2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers);

// var newNumbers = [];
// numbers.forEach(function (x) {
//     newNumbers.push(x * 2);
// });

// const newNumbers = numbers.map(function (x) { // more concise using map because this function itself actually returns an output which is new array
//     return x * 2;
// });
// console.log(newNumbers);

// fat arrow
// const newNumbers = numbers.map(x => x * 2);
// console.log(newNumbers);



//Filter - Create a new array by keeping the items that return true.
// var numbers = [3, 56, 2, 48, 5];

// more simply
// const newNumbers = numbers.filter(function (num) {
    //     return num < 10 // check condition
// })
// console.log(newNumbers);

//fat arrow
// const newNumbers = numbers.filter(num => num < 10)
// console.log(newNumbers);

// more effort
// var newNumbers = [];
// numbers.forEach(function (num) {
    //     if (num < 10) {
        //         newNumbers.push(num);
//     }
// })
// console.log(newNumbers);



//Reduce - Accumulate a value by doing something to each item in an array.
// var numbers = [3, 56, 2, 48, 5];

// more simply
// var newNumber = numbers.reduce(function (accumulator, currentNumber) { // accumulator = going to be the equivalent of that previous variable
//     console.log("accumulator = " + accumulator);
//     console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// })
// console.log(newNumber)

// fat arrow & single line statement
// var newNumber = numbers.reduce( (accumulator, currentNumber) =>  accumulator + currentNumber);
// console.log(newNumber)

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//     newNumber += currentNumber
// })
// console.log(newNumber);



//Find - find the first item that matches from an array.
// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.find(function (num) {
//     return num > 10;
// })
// console.log(newNumber);

// fat arrow
// const newNumber = numbers.find(num => num > 10)
// console.log(newNumber);



//FindIndex - find the index of the first item that matches.
// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.findIndex(function (num) {
//     return num > 10;
// })
// console.log(newNumber);

// fat arrow
// const newNumber = numbers.findIndex(num => num > 10)
// console.log(newNumber);

// challenge
// import emojipedia from "./emojipedia";

// const newEmojipedia = emojipedia.map(function
//     (emojiEntry) {
//     return emojiEntry.meaning.substring(0, 100) // substring(0, 100) = to cut it down to 100 characters.
//     })

// console.log(newEmojipedia)

// example String.substring()
// var str = 'Mozilla';

// console.log(str.substring(1, 3)); // 1 =  mulai index yang akan ditampilkan; 3 = batas nilai index yang ditampilkan, yang artinya 1, 3 akan menampilkan value index ke-1 dan ke-2. (Array dimulai dari index ke-0)
// // expected ouput: "oz"

// console.log(str.substring(2)); // 2 = artinya menapilkan value mulai index ke-2 dalam array.
// // expected output: "zilla"
