//nullish coalescing operator (??) : null and undefined

let val1;
val1 = null ?? 9
let val2 = null ?? 10 ?? 20

// a = null ?? <fucntion call>

console.log(val1);
console.log(val2);

//ternary operator
//condition ? <do>

const i = 10;
i <= 10 ? console.log("yes") : console.log("no");

