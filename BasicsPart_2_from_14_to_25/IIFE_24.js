// ***Immediately Invoked Function Expressions (IIFE) ***
// global scope ki declaration(pollution) se problem hoti hai kai baar toh hm iife use karte hai declaration se bachne ke liye

// Normal function 
// function chai(){
//     console.log("chai peelo");
// }
// chai()

// IIFE - semicoln lagana jaruri hai 
// (function chai(){
//     console.log("chai peelo");
// })();
let name = "Hitesh";
( (name) =>{
    console.log(`js by ${name}`);
})(name);

