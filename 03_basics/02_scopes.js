let a =10
const b = 20
var c =30

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "vaishnav"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

if(true){
    const username =  "vaishnav"
    if(username === "vaishnav"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


function addone(num){
    return num +1
}

addone(5);

 addTwo(5);
const addTwo = function(){
    return num +2;
}

