const user={
    usernname:"Salar",
    price:"340",
    welcome:function(){
        console.log(`${this.usernname} , welcome onboard`);
        // console.log(this);
    }
}

// user.welcome()
// user.usernname="Khan"
// user.welcome()

// console.log(this);

// function chai(){
//     const username="salar"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     const username="salar"
//     console.log(this.username);
    
// }
// chai()

// const chai = ()=>{
//     const username="salar"
//     console.log(this);
    
// }
// chai()

const addTwo=(num1,num2)=>{
    return num1+num2
}
// console.log(addTwo(5,6))

//IMPLICIT RETURN
const addTwos=(num1,num2)=>num1+num2
// console.log(addTwos(5,6))

//PARENTHESIS USED IN REACT
const addTw=(num1,num2)=>(num1+num2)

//RETURN OBJECT
const addT=(num1,num2)=>({usernname:"Salar"})
// console.log(addT(3,4))