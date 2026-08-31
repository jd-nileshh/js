const accountId = 144553;
let accountEmail = "aman@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";  //possible but not recommended
let accountState ;

// accountId = 4433; // not allowed reassigining of const

accountEmail = "raj@gmail.com"
accountPassword = "21211";
accountCity = "Bengaluru";

// console.log(accountId);
/* 
Prefer not to use var because of issue in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity , accountState  ]);
