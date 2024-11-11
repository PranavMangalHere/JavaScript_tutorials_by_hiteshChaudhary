// for of Loop

// const arr = [1,22,3,4,5]

// for (const iterator of arr) {
//     console.log(iterator);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }

// ***** Maps *****

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':-', value);
// }

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for(const [key,value] of myObject){
//     console.log(key, ':-', value);
// }
// for (const key in myObject) {
//     console.log(`${key} and value is ${myObject[key]}`);
// }

// const programing = ["js","rb","py","java","cpp"]

// for(const key in programing){
//     console.log(programing[key]);
// }

// ***** For Each Loop *****
const coding = ["js","rb","py","java","cpp"]
// coding.forEach( function (item) {
//     console.log(item)
// } )

coding.forEach(  (item) =>{
    console.log(item)
} )