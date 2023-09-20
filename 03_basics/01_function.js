

function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
    console.log("V");
}
// sayMyName();

// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){//parameters
    // let result = number1 + number2
    // console.log("Vaishnav");
    // return result
    return number1 + number2
    
    
}
const result = addTwoNumbers(3,5);//arguments
// console.log("Result", result);
function loginUserMessage (username  ){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Vaishnav"))
console.log(loginUserMessage())


function calculateCarPrice(val1,val2,...num1){//rest operator
    return num1


}

console.log(calculateCarPrice(200,400,500,2000));

const user ={
    username:"vaishnav",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returSecondValue(getArray){
    return getArray[1]
}

// console.log(returSecondValue(myNewArray));
console.log(returSecondValue([200,400,500,1000]));


