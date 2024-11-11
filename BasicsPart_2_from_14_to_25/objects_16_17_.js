//*****  objects -
// singleton
// object.create

// objects literals
const mysymbol = Symbol("key1");

const JsUser = {
    name:"Pranav",
    age: 19,
    [mysymbol] : "mykey1",
    location : "Ambala",
    email: "pranavmanga9@gmail.com",
    lastLoginDays:["Monday", "Saturday", ]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(typeof JsUser[mysymbol])

// JsUser.email = "Pranav@abc.com"
// Object.freeze(JsUser) // isko lagane ke baad hum object mai changes nahi kar paayenge
// JsUser.email = "Pranav@xyz.com"

// console.log(JsUser)

// JsUser.greeting = function(){
//     console.log("hello Js user");
// }
// JsUser.greeting2 = function(){
//     console.log(`hello Js user, ${this.name}`);
// }

// console.log(JsUser.greeting)
// console.log(JsUser.greeting())
// console.log(JsUser.greeting2())

// ************ Objects (part-2) *********

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Pranav",
            lastname :"Mangal"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)

const object1 = { 1:"a", 2:"b"}
const object2 = { 3:"a", 4:"b"}

// const object3 = {object1,object2}
// const object3 = Object.assign({},object1,object2)

// const object3 = {...object1,...object2}
// console.log(object3)

const users = [
    {
        id: 1,
        email : "asd@gmail.com"
    } ,
    {
        id:2,
        email:"qwe@gmail.com"
    }, 
    {
        id:3,
        email:"zxc@gmail.com"
    }
]

// console.log(users)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

