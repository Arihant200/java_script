const user={
    username:"hitesh",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username},welcome`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this)//empty in node environnment

// function chai(){
//     let username="aj"
//     console.log(this.username)//undefined
//     console.log(this)//not empty or undefined
// }
// chai()


const chai=()=>{
    let username="aj"
    console.log(this.username)//undefined
    console.log(this)//empty
}
chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2;//explicit return
// }
const addTwo=(num1,num2)=> num1+num2;//implicit return
console.log(addTwo(4,5))


const f=()=>({username:"aj"})//if in implicit rerturn we want to return object use parenthesis
console.log(f())

