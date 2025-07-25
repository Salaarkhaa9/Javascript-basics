const chai={
    name:"ginger-chai",
    expiry:"soon"
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name",{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

console.log(chai.name="me")
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
