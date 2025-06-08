function sayMyName(){
    console.log("arihant")
}
function add(number1,number2){
    return number1+number2
}
add(3,'a')
add(3,-2)
add("abc",-1)
const result=add(3,5)
console.log("Result:",result)

function loginUserMessage(username){
    if (username===undefined) {
        console.log("enter a usernam");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("arihant"))

function CalculateCartPrice(val1,...num1){//rest
    return num1
}
//...num means everything psses as paramater is stored in an array
console.log(CalculateCartPrice(200,400,200))
 const user={
    username:"arihant",
    price:199
 }
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`)
 }
 handleObject(user);