const string=[]

if(string){
    console.log("Its a string");
    
}
else{
    console.log("not a string");
    
}
//FALSE VALUES
/*
false,0,-0,null,undefined,"",BigInt,NaN, 0n
*/

//TRUTH VALUES

/*
true,1,[],"0","false",{},function(){}
*/ 
if(string.length ===0){
//console.log("Array is empty");

}

const obj={}

if (Object.keys(obj).length===0) {
    console.log("Object is empty");
    
}

//NULL COALESENCE OPERATOR

let val1;
// val1=5??10
// val1=null??10??20
val1=undefined??10??20
//console.log(val1);


//TERNARY OPERATOR

const itemPrice=800
//itemPrice>=799?console.log("Its is greater then 799"):console.log("It is smaller than 799");
