//FORIN ON THE OBJECTS
const object={
    js:"Javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in object) {
    //console.log(`${key} is shortcut for ${object[key]}`);
}

//FORIN ON THE ARRAYS
const array=[11,13,12,23,14,45]
for (const key in array) {
    //console.log(array[key]);
    
}

//FOR IN ODESNOT WORK FOR MAPS
const map=new Map()

map.set("PAK","PAKISTAN")
map.set("FR","FRANCE")
map.set("IND","INDIA")

for (const key in map) {
    //console.log(key);
    
}