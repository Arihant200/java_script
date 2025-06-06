const marvel_heros=["thor","spiderman","ironman"]
const dc_heros=["superman","flahs","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)//array in array aayega
//array takes anothe rarray as push in it
const arr2=marvel_heros.concat(dc_heros)
console.log(arr2)
console.log("hi")
const all_new_heros=[...arr2,...dc_heros];//spread spreads each element of array in individual
console.log(all_new_heros)
const another_arr=[1,2,3,[4,5],6,[7,[8,9]]]
const real_another=another_arr.flat(Infinity)//goes to some depth and prints them as individual
console.log(real_another)
console.log(Array.isArray("arihant"))
console.log(Array.from("arihant"))
console.log(Array.from({name:"arihant"}))//interesting case,have to specify wheteher use keys or values
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3,{name:"arihant"}))

