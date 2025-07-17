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
function caclPrice(val1,val2,...num1){
    return num1
}
// console.log(caclPrice(200,300,500,10190));

const user={
    username:"saalar",
    email:"adlkfjdalkjflkajfl"
}

function newObject(anyObject) {
    console.log(`Hello my name is ${anyObject.username} and my email is ${anyObject.email}`);
    
}
// newObject(user)

newObject({
    username:"sam",
    email:"kjahfkjahfkjahf"
})

const array=[200,300,400,500]

function myArr(newArr){
    return newArr[1]
}
// console.log(myArr(array));

console.log(myArr([200,301,909,55]));
