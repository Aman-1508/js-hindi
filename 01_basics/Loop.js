// for(let i=0 ; i<=5 ;i++){
//     console.log(i);
// }
// for(let i =1; i<=15; i=i+2){
//     console.log(i)
// }
// for(let i =1; i<=10; i++){
//     console.log(i*5);
// }
// const fs = require("fs");

// const input = fs.readFileSync(0, "utf-8").trim();

// const n = parseInt(input);
// for(let i =1; i<=10; i++){
//     console.log(i*n);
// }

//Nested Loop 
// for(let i=1 ; i<=3; i++){
//     for(let j =1; j<=3 ;j++){
//         console.log(i*j);
//     }
// }

// let found = true;
// let i=0 ;
// while(true){
//     console.log(i);
//     i++;
//     if(i>8){
//         break;
//     }
// }

// Loop with Arrayds
//  let arr =["aman" , "akash", "abhay"];
// for(let i =0 ;i<arr.length; i++){
//     console.log(i ,arr[i]);
// }
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // // Nested loop to print
// // for (let i = 0; i < arr.length; i++) {       // iterate over rows
// //     for (let j = 0; j < arr[i].length; j++) { // iterate over columns
// //         process.stdout.write(arr[i][j] + " "); // print without newline
// //     }
// //     console.log(); // new line after each row
// // }
// // Using for...of loop
// for (const elem of arr) {
//     console.log(elem);
// }
// for(char of "aman Singh"){
//     console.log(char);
// }
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (const row of arr) {           // iterate over each row
    for (const elem of row) {      // iterate over each element in the row
        process.stdout.write(elem + " ");
    }
    console.log(); // new line after each row
}
