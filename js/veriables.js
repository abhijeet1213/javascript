const accountId = 144553
let accountEmail = "abhijeetak362001@gmail.com"
var accountPassword = "46565186"
accountCity = "Karad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "praju610@gmail.com"
accountPassword = "95458080"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])