//FOR

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(i);
    
    
// }

// for (let i = 0; i <=10; i++) {
//     console.log(`Outer loop is running ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`Inner loop is running ${j}`);
//         console.log(i +"*"+ j + "=" +i*j);
        
//     }
    
// }

let array=["supraman","batman","finna"]
// console.log(array.length);
// for (let index = 0; index < array.length; index++) {
//     const element=array[index]
//     console.log(element); 
// }


//break and continue
for (let i = 0; i <=10; i++) {
    if(i==5){
        console.log("Detected 5");
        // break
        continue
    }
    console.log(i);

}