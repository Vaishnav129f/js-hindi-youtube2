// Primitive 

//7 types : String , Number, Boolean, null, undefined,Symbol(unique banane ke liye use krte component), BigINT

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null

let userEmail ;

const id= Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

//const bigNumber = 34565435565674557548n
// Referenced (Non Primitive)

//Array, objects ,Functions

const heros = ["shaktiman", "naagraj","doga"];
let myObj = {
    name:"hitesh",
    age: 22,

};

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof id);


//++++++++++++++++++++++++++++++++
// Stack (Primitive),Heap (Non Primitive)

let myYoutubename= "VaishnavSrivastava";

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"

}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


