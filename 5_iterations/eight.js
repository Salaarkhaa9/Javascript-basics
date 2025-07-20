//REDUCE

const array=[1,2,3]

// const newTotal=array.reduce(function (acc,currval){
//     console.log(`${acc} and ${currval}`);
        
//     return acc+currval
// },0)
const newTotal=array.reduce((acc,currval)=>(acc+currval),0)

console.log(newTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
