"use strict"; // treat all the js code as newer version

// alert(3+3) // we are using nodejs , not browser
 
let name = "qwere";
let age = 18;
let isLoggedIn = false;

// number => 2 to power 53
// bigint
// string =>""
// boolean => true/false
// null => standalone value(ye apne aap mai ki ek value hai) ye ek object hai 
// undefined => (iska matlab ye hai ki value abhi assign nahi hui hai)
// symbol => unique

// object

// console.log(typeof null)

// let score = "33abc"

// console.log(typeof score);
// // ye guarantee hai ki string number mai convert ho gayi 
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber) // Nan output

// *********** Operations **********

// let value = 3
// let negvalue = -value
// console.log(negvalue)

// let n1 , n2 , n3
// n1 = n2 = n3 = 2+2

// ******* Comparison of data types****** 
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true  

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined < 0);

//[ === ] isse data type bhi check hota hai 

// ************* summary ************

// primitive

// 7 types: String, number, boolean, null, undefined, Symbol,
// ,BigInt

// Qus - Is js dynamically typed language or statically typed language??
// Ans - dynamically  "      " . 

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId) // false kiyoki symbol unique rahegi

// ********* Reference (Non - Primitive)*******

// Array, Objects, Functions
// array aur object toh pata hi hai

// const myfunction = function(){
//     console.log("Hello ");
// }
