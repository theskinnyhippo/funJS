let score = "101abc"

console.log(typeof score)

let man = Number(score)

console.log(typeof man)     //definitely a number
console.log(man)            //but abc acnt be shown as number
//const {score} = req.body


// "33" => 33
// "string" => NaN
// boolean => 0 or 1

let a = " "
let bool = Boolean(a)

console.log(bool)

// any number - {0} => true ; 0 => false
// "string or space or both" => true ; empty string => false
