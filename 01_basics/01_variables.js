const accountId=14453//const means this can't change
let accountEmail="arihant@gmail.com"
var accountPass="123"
accountCity="Jaipur"
let accountState;//not give some value so undefined value is applied
//accountId =2 //not allowed
accountEmail="hc@reddifmail.com"
accountPass="321"
accountCity="bengaluru"

console.log(accountEmail)
/*
prefer not to use var because of issue in block scope and functional scope

*/
console.table([accountId,accountEmail,accountPass,accountCity,accountState])