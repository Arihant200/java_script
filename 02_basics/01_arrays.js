//array
const myArr=[0,1,2,3,true,"arihant"]
const myArr2=new Array(0,1,2,3,4)
console.log(myArr2[2])
//arr methods
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(100)//add 100 in front of array
myArr.shift()//shift arr to left
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(2))

//slice ,splice
console.log("A",myArr)
const myarr1=myArr.slice(1,3);
console.log(myarr1);
console.log("B",myArr);

const myarr2=myArr.splice(1,3)
console.log(myArr);//splice sliced the portion from main array
console.log(myarr2)//spliced portion printed
// .join =>convert to string
