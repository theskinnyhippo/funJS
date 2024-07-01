let s1 = "Mandir", s2 = " learns JS"

console.log(s1 + s2)

console.log(1 + "2")            // str + int => str + str(int)
console.log("1" + 2)            // same 

console.log(1 + "2" + 3)        // 123
console.log(1 + 2 + "3")        // str(1+2) + "3" = 33
console.log("1" + 2 + 3)        // 123

console.log(+true)              //=> 1
console.log(+"")                //=> 0
//console.log(true+)              //=> error, no type conversion of operators

console.log(" ");


/***********************<conditionals>***********************/

console.log(null > 0)
console.log(null >= 0)      //true
console.log(null == 0)

console.log(" ");

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined >= 0)     //false

console.log(" ");
// == checks by converting the right data into left datatype
// === checks both data and their datatype (strict check)

console.log("2" == 2)
