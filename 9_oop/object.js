function user(username,score){
    this.username=username
    this.score=score
}
user.prototype.increment=function () {
    this.score++
}
user.prototype.printMe=function () {
    console.log(`Name of the user is ${this.username}`);
    
}
const userOne= new user("Salar","123")
const userTwo= user("Salar","123")

userOne.printMe()