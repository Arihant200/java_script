let score="33ab"

console.log(typeof score);//number
console.log(typeof(score))

let valueInNumber=Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)//NaN
//"33"=>33
//"33abc"=>NaN(type is Number itself)
//true=>1
//null=>0
//undefined=>NaN

let isLoggedIn=""

let bolleanIsLoggedIn=Boolean(isLoggedIn)
console.log(bolleanIsLoggedIn)
//1=>true 0=>false
//""=>false
//"aj"=>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))

//operations//
 let value=3;
 let negvalue=-value;
 console.log(negvalue);

let str1="hello"
let str2=" arihant"
let str3=str1+str2
console.log(str3);
