//singleton is differnece in literals and constructors
//object literals

// Object.create
const mysym=Symbol("mykey")

const jsUser={
    [mysym]:"mykey1",//to pass symbol as key use square brackets
    name:"arihant",
    age:18,
    location:"jaipur",
    email:"arihant@gmail.com",
    isloggedin:false,

}
console.log(jsUser.email)
console.log(jsUser["email"])//give key as string only when not using .
console.log(jsUser[mysym])

// Object.freeze(jsUser);//now no change in object possible

jsUser.greeting=function(){
    console.log("hello");
}
jsUser.greeting()
jsUser.greeting2=function(){
    console.log(`hello,${this.name}`)
}
jsUser.greeting2();