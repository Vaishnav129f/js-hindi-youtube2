//singelton

//object literals

const mySym = Symbol("key1")

// Object.create
const JsUser = {
    "name":"Hitesh",
    "full name": "Vaishnav Srivastava",
    [mySym]:"mykey1",
    age: 18,
    location:"Gr Noida",
    email:"vaishnavsrivastavamzp.gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "vaishnav@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "vaishnav@microsoft.com"
console.log(JsUser);







