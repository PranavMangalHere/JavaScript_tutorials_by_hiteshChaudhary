// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item)=> {
//     console.log(item);
//     return item;
// }) 

// console.log(values); // for each loop mai agar variable declare karte hai to kuch return nahi karte woh

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> {
//     return num > 4;
// })
// const newNums = []
// myNums.forEach( (num)=>{
//     if(num >4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const myNumbers =  [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => { return num+10 })

// const newNums = myNumbers
//         .map((num) => num * 10)
//         .map((num) => num + 2 )
//         .filter((num) => num > 50)

// console.log(newNums);

// **** Reduce ****

const array = [1,2,3,4,5,6,7];

const initialValue = 0 ;
const Sum = array.reduce( (acc , currentVal) => {
    return acc + currentVal;
}, 0)
console.log(Sum);