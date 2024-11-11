// ********* THIS ******** current context ko refer karta hai
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "asdf"
//     console.log(this)
//     console.log(this.username);
// }

// ************* ARROW **************

const chai = () =>{
    let username = "asdf"
    console.log(this);
    console.log(this.username);
}

// chai() 

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// // another way of arrow function called impicit return 

const addtwo = (num1 , num2) => num1 + num2

console.log(addtwo(3,4));
