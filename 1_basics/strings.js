const name= "Salar";
const awards= "50";

console.log(`Hello my name is ${name.toUpperCase()} and my award count is ${awards}`);

const gameName = new String("hitesh-hc");

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('H'));
console.log(gameName.substring(0,4));
console.log(gameName);

const newString= gameName.slice(-8,4);
console.log(newString);

const newName=new String("   hrlllnkjhkjhkj    ")
console.log(newName.trimStart());

const url="https://salaar_kha9.vercel.com/Salar%20Khan"
console.log(url.replace("%20", "-"));
console.log(url.includes("salaar"));
console.log(gameName.split("c"));






