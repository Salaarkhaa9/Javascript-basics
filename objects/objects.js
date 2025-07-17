//object literals
const mysym=Symbol("key1")

const data={
    name: "Salar",
    "full name":"Salar khan",
    [mysym]:"myKey1",
    age:10,
    email:"salarwasil2004@gmail.com",
    lastPresent:["Monday","Tuesday"],
    location: "Rawalpindi",
    isLoggedin: false,
}

// console.log(data.name);
// console.log(data["email"]);
// console.log(data["full name"]);
console.log(data[mysym]);

data.email="kowalskikh92@gmail.com"
// Object.freeze(data)
// console.log(data);

// data.email="agdjdagkjhdakgkdahg"
// console.log(data);

data.greetings=function(){
    console.log("Hello user");
}
data.greetingsTwo=function(){
    console.log(`Hello user ${this.email}`);
}

console.log(data.greetings());
console.log(data.greetingsTwo());
