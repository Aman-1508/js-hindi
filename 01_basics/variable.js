const accountId = 14453
let accountEmail = "aman734876@gmail.com"
var accountPassword="12345"
accountCity = "kanpur"

// accountId = 2 //not allowed.

console.log(accountId);
// console.table([accountEmail, accountId, accountPassword, accountCity])

accountEmail = "amanSingh@gmail.com"
accountPassword="54321"
accountCity = "jamshedpur"
let accountState;

console.table([accountEmail, accountId, accountPassword, accountCity,accountState])
/*
prefer not to use var due to block scope and functional scope
*/
