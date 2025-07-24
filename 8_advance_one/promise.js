// const promiseOne=new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task is completed");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(()=>{
//     console.log("Promise fulfilled");
// })
// new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Async task 2 is completed");
//         resolve()
//     }, 5000);
// }).then(()=>{
//     console.log("Promise 2 fulfilled");
// })

// //RESOLVE PARAMETER
// const promiseThree=new Promise((resolve, reject)=>
// {
//     setTimeout(() => {
//         resolve({
//             name:"Salar",
//             email:"salar@example.com"
//         })
//     }, 1000);
// })
// promiseThree.then(function(user){
//     console.log(user); 
// })

// // PROMISE CHAINING
// const promiseFour=new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         let error=false
//         if(!error){
//             resolve({username:"salar", email:"saalr@123.com"})
//         }else{
//             reject('ERROR: Something is wrong')
//         }
//     }, 1000);
// })
// promiseFour.then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('The issue is either rejected or resolved');
    
// })

// const promiseFive=new Promise(function(resolve,reject){
//     let error=false
//     if(!error){
//         resolve({username:"salar", email:"salar2004@gmail.com"})
//     }else{
//         reject("ERROR: Something is very wrong")
//     }
// })
//  async function consumerProduced() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumerProduced()

// async function getAllUsers() {
//     try {
//         const response=await fetch("https://jsonplaceholder.typicode.com/")
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
    
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>console.log(data)
// )
// .catch((error)=>{
//     console.log(error);
// })
