// //Array 
// let myArray=[0, 1, 2, 3, 4, 5]
// const myArr2 = new Array(1,2,3,4) 
// console.log(myArr2[2])

//Array methods
// push(element), pop()
//unshift(value) , shift() 
//includes(element) , indexOf(index)
// join() //join the elemments of  Array in a single string seperated by commas
// slice(starting , ending(not included)) cut the array in given limit
// splice(starting , ending(included)) // ivide the array into two group changes the original array

const marvel_heroes =["thor", "Ironman" ,"spiderman"]
const Dc_heroes =["Superman", "flash" ,"batman"]
const newArray= marvel_heroes.concat(Dc_heroes)
console.log(newArray);

const all_new_heroes = [...marvel_heroes, ...Dc_heroes]
console.log(all_new_heroes);
// flat(depth) //seperates the elements inside a array of array
//isArray()//checks the value for array
// from() and of()
