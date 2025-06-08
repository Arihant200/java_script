let a=300
let b
if (true) {
    let a=10
const b=20
// var c=30 var is function/global scoped that means its reachbale out of block scope

}
console.log(a);
console.log(b);
// console.log(c)
function one(){
    const username="arihant"
    function two(){
        const website="youtube"
        console.log(username)
    }
    two()
    // console.log(website)
    
}
one() 

//+++++++++++=interesting++++++++++++//

console.log(addone(8))//hoisting
function addone(num){//normal function
    return num+1
}
console.log(addTwo(5))//gives error
const addTwo=function(num){//these are called expressions(variable is hlding a  function)
    return num+2
}
