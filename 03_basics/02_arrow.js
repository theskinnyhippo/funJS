function addTwo(num){
    return num + 2;
}

const addOne = function(num){
    return num + 1
} 

console.log(addOne(5))
console.log(addTwo(7))

// function chai(){
//     console.log(this)
// }
// chai()

//explicit return
const chai = () => {
    return "chai_latte";
}

//implicit return
const chai2 = () => "chai_latte2"
const chai3 = () => ("chai_latte3")

console.log(chai())
console.log(chai2())
console.log(chai3());

//====================================================== immediately invoked function
//global scope ke pollution se problem hoti hai,and iffy helps to solve that
(function lmao(){
    console.log("hahahaha!")
})();

(() => {
    console.log("hihihi!")
})();

// (1st) -> function body
//  (2nd) -> fucntion call on spot
// aage ka semicolon is must here!!!!

