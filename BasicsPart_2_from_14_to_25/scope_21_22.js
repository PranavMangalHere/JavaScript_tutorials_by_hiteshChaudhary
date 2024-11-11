// jo let aur const hai woh toh function ke bahar access nahi ho paate but
// jo var hota hai uski declaration global hoti hai matlab agar func mai bhi var se declare kiya hai toh woh pure codee mai declare hi jaaega 
if(true){
    let a = 10
    const b = 20
    var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }

// console.log(username);

// ************* interesting **************

function addone(num){
    return num + 1
}

console.log(addone(5));

const addTwo = function(num){
    return num + 2
}

addTwo(5)