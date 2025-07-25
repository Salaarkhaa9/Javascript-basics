class User{
    constructor(username, password){
        this.username=username
        this.password=password
    }
    get password(){
        //return this._password.toUpperCase()
        return `${this._password}salar`.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}

const user=new User("Salar", "123")
console.log(user.password)