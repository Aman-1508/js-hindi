//this is a keyword which is used to call the element of current object.

//try and catch for Exception;

try {
    console.log(a);
}
catch{
    console.log("Not defined variable");
}
// try always follow catch or finally
//Misc concept 
//1: Arrow Function
// const sum = (a,b) => {
//     console.log(a * b);
// }
// console.log(sum(4 , 5));

//implicit return 

// const product = (a,b) => (a * b);
// console.log(product(5 ,5));


// //setTimeout(function , timeout);
// console.log("Hi there !");
// setTimeout(() => {
//     console.log("Aman Singh");
// },200);

// console.log("My Name is ")


//setInterval()

// console.log("Hi there !");
// setInterval(() => { 
//      console.log("Aman Singh");
// },1000);
// //every call function has a id we can use this to stop function
// console.log("My Name is ");


// this with Arrow Function 
// lexical scope uses

// const student ={
//     name: "Aman",
//     age : 22,
//     scope : this,
//     getName : function (){
//         return this.name;
//     }
// };

// let square = n => (n*n);

// console.log(square(5));

let id =setInterval(() => { 
      console.log("Aman Singh");
 },2000);

 setTimeout(() => { 
      clearInterval(id);
 },10000);
