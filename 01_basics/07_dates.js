let myDate=new Date();//my date is an object
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())

let mycreatedDate=new Date(2025,5,3)//month starts from 0 in js
console.log(mycreatedDate.toDateString())
 mycreatedDate=new Date("2023-02-13")
console.log(mycreatedDate.toDateString())//month starts from 1
 mycreatedDate=new Date(2025,5,5,5,16)
console.log(mycreatedDate.toDateString())

let myTimeStamp=Date.now()
console.log(myTimeStamp);//gives in ms

console.log(mycreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

console.log(myDate.getUTCDay())




