// **** Array (Part-1) ****

const myarr = [1,2,3,4,5,6,true,"Pranav"];

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2.length)

// array methods 

// myArr2.push(5)
// myArr2.push(6)
// console.log(myArr2); // 1,2,3,4,5,6
// myArr2.pop()
// console.log(myArr2); // 1,2,3,4,5
// myArr2.unshift(9); // ye array ke first mai insert karta hai 
// console.log(myArr2); // 9,1,2,3,4,5
// myArr2.shift(); // zero index wala shift ho jata hai
// console.log(myArr2); // 1,2,3,4,5
// console.log(myArr2.indexOf(3));

//****  slice , splice - differnce for interview

// console.log("A ", myArr2);// 1,2,3,4

// const myN1 = myArr2.slice(1,3);
// console.log("A ", myArr2);
// console.log("slice ", myN1); // 2,3

// const myN2 = myArr2.splice(1,3,34,65) // (index, count(matlab itne hatane hai), agara aage insert karne hai toh)
// console.log("A ", myArr2); // 1 aya kiyoki original array mai se splice ka array hi nikal aya
// console.log("splice ", myN2); // 2,3,4

//***** Array(Part-2) ****
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman" , "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // array ke andar array ban jata hai js mai
// console.log(marvel_heros[3][1]); // output - flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// another method (...name) this is called spread operator
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

// const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity) //returns all the array aur array ke andar ka array concatinated into the array
// // // iske bracket mai haamme depth deni padti hai ki kaha tak hum isse solve kare
// console.log(real_another_array)

// console.log(Array.isArray("Pranav")) // false not an array
console.log(Array.from("Pranav")) // array ban jaayega
// console.log(Array.from({name:"Pranav"})) // isko ye convert nahi kar payega

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3))