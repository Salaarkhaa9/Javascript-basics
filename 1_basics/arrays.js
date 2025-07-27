// const array=[0,1,2,3,4,5]
// console.log(array);

// console.log(array[5]);
// array.push(10000000)
// console.log(array);

// // array.unshift(89);
// array.shift();
// console.log(array);

// const newArray= array.join()
// console.log(newArray);

//slpice slice

// console.log("A",array);
// const myn1=array.slice(1,3);
// console.log(myn1);

// console.log("B",array);
// const myn2=array.splice(1,3);
// console.log("C",array);
// console.log(myn2);

// concat 
const heros=["shaktiu","ironnigga", "supraman"];
// console.log(heros);

const dc_heros=["spiderman", "batman"]

// heros.push(dc_heros)
// console.log(heros);

// const newHeros=heros.concat(dc_heros)
// console.log(newHeros);

// const newHero=[...heros,...dc_heros];
// console.log(newHero);

// const anotherArray=[1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
// const realArray=anotherArray.flat(2)
// console.log(realArray);

// check array or convert to array

// console.log(Array.isArray("Salar"));
// console.log(Array.from("Salar"));
// console.log(Array.from({name:"salar"}));

// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3));

//MAP modifies the existing array
const array=[1,2,3,4,5,6]
const newArr=array.map((price)=>{
    return price*0.5
})
console.log(newArr);








