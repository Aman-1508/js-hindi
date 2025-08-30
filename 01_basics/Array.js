// // //Array 
// // let myArray=[0, 1, 2, 3, 4, 5]
// // const myArr2 = new Array(1,2,3,4) 
// // console.log(myArr2[2])

// //Array methods
// // push(element), pop()
// //unshift(value) , shift() 
// //includes(element) , indexOf(index)
// // join() //join the elemments of  Array in a single string seperated by commas
// // slice(starting , ending(not included)) cut the array in given limit
// // splice(starting , ending(included)) // divide the array into two group changes the original array

// // const marvel_heroes =["thor", "Ironman" ,"spiderman"]
// // const Dc_heroes =["Superman", "flash" ,"batman"]
// // const newArray= marvel_heroes.concat(Dc_heroes)
// // console.log(newArray);

// // const all_new_heroes = [...marvel_heroes, ...Dc_heroes]
// // console.log(all_new_heroes);
// let empArray = ["Aman" ,78,10.3];
// empArray[0]="z"
// console.log(empArray[0]);
// // flat(depth) //seperates the elements inside a array of array
// //isArray()//checks the value for array
// // from() and of()
let start = ["jan","july","mar","aug"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);
// aray work on references if you compare to different arrays it will give false you must copy the address

const arr =[1 , 2, 3, 4];
const g = 9.8;
arr.push(5);
console.log(arr);
// we can change the elements but we cannot change the refernce with new array as array comes with the refernce for a const array.
// Nested Array 
let nums = [[1,2] , [2,3],[1,2,3]];
console.log(nums[0].length);
let ticTac =[['X','null','O'],['null','x','O'],['null','0','x']]
console.log(ticTac);
ticTac[0][1]='0';
console.log(ticTac);
