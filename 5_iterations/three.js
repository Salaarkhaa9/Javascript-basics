//FOR OFF LOOP

const array=[0,1,2,3,4,5]
for (const i of array) {
    // console.log(`Value of item in array is ${i}`);
    
}

const greetings="Hello Salar"

for (const greet of greetings) {
    //console.log(`Value of greetings are ${greet}`);
    
}

//MAPS ARE NOT ITERATABLE 
const map=new Map()

map.set("PAK","PAKISTAN")
map.set("FR","FRANCE")
map.set("IND","INDIA")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}

//FOR OFF DOESNT WORK FOR OBJECTS

const object={
    greet: "Greeting",
    hello: "hjghjg"
}

// for (const [key, value] of object) {
//     console.log(key,":-",value);
    
// }
