const promiseOne  = new Promise(function(resolve,reject){
    //Do any async task
    //DB calls, cryptography , network
    setTimeout(function(){
      console.log('Async task is complate'); 
      resolve() 
    }, 1000)
});
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    getTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        leterror = true
        if(!error){
            resolve({username:" hitesh", password:"123"})    

        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})


promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);

}).finally(()=> console.log("The promise is either resolve or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({username: "javascript", password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive (){
    const response =  await promiseFive 
    console.log(response);
}
async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(reponse);
    }catch(error){
        console.log(error);
    }

} 