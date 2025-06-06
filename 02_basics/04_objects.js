const tinderUser=new Object()//makes {}
//using literal forms singleton object and using constructor forms non singleton objects
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isloggedIn=false
console.log(tinderUser)

const regularUser={
    email:"aj@gmail.com",
    fullname:{
        firstname:"arihant",
        lastname:"jain"
     }
}

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}//create 2 objects in an object
const obj4=Object.assign(obj1,obj2);//.assign(source,target)...add target to source
console.log(obj4)

const obj5={...obj1,...obj2};
console.log(Object.keys(tinderUser));//give array of keys,can get array of valeus also
console.log(tinderUser.hasOwnProperty("j"))


const course={
    coursename:"js course",
    price:"99",
    courseTeacher:"arihant"
}
//destructuring
const {courseTeacher:instructor}=course 
console.log(instructor)

