function User(username, email, password){
        this.username=username
        this.email=email
        this.password=password

}
User.prototype.encryptPassword=function () {
    return `${this.password}abc`;
    
}
User.prototype.changeUsername=function () {
    return `${this.username.toUpperCase()}`;
    
}

const tea=new User("salar", "akjfajks@gmail.com", "123")
console.log(tea.changeUsername());
console.log(tea.encryptPassword());
