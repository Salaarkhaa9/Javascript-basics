// let myName="Salar    "
// let myItem="chai    "
// console.log(myName.trim().length);

let myHero=["Spiderman", "Batman"]

let heros={
    name:"hitesh",
    spiderman:"sling",
    getdata:function(){
        console.log(`power of spiderman is ${this.spiderman}`);
        
    }
}

Object.prototype.salar=function(){
    console.log(`Salar says me`);
}
Array.prototype.heySalar=function(){
    console.log(`Salar says hi`);
}

// myHero.heySalar()
// myHero.salar()

let anotherUsername="maiorchai  "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True lenth is ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"Salar   ".trueLength()
"Eta   ".trueLength()