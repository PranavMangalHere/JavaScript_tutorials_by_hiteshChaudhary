function saymyName (){
    console.log("Pranav Mangal")
}
// saymyName()

function AddTwoNumbers(num1,num2){

    // console.log(num1 + num2);
    // let result = num1 + num2
    // return result 
    return num1 + num2
}

// const result =  AddTwoNumbers(3,4);

// console.log("Result: ",result);  // output - 7 , undefined

function loginUserMessage(username){
    if(username === undefined){
        console.log("Plese enter username");
        return
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Pranav"))
// console.log(loginUserMessage())

function calculateCartPrice(...n1){ // (...) isse rest operator kehte hai aur spread operater bhi 
    return n1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

const myNewArrray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArrray));