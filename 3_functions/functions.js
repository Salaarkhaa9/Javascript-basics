function addTwoNumber(num1,num2){
    //console.log(num1+num2)
    // console.log("Salars sum");
    return num1+num2
}

const result=addTwoNumber(3,5)
// console.log(result);

function loggedInUser(username="khan"){
    if(username=== undefined){
        console.log("Enter username..");
        return
    }
    return `${username} just logged in`
}

console.log(loggedInUser("Salar"));

// console.log(loggedInUser());
