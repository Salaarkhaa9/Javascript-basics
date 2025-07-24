class Animal{
    constructor(username){
        this.username=username
    }
    logIn(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}

class Dog extends Animal{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`THIS COURSE WAS ADDED BY ${this.username}`);
    }
}

const TRA=new Dog("TRA", "SKDSGKDH@gmail.com", "12345678")

const masla=new Animal("PUPPY")
// masla.logIn()
// masla.addCourse()
// TRA.addCourse()
// TRA.logIn()

class User {
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password

    }
    logIn(){
        console.log(`${this.username} has logged in`);
    }
    static createID(){
        return 123
    }
}
const chai= new User("salar", "gfhgfhg@gmail.com", "7667")
//console.log(chai.createID())
class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}
const iPhone=new Teacher("TRA", "tra123@gmail.com")
iPhone.logIn()
