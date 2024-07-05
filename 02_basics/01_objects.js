// singleton objects : ---> literal objects not made up of constructors


const mySym = Symbol("lol")

const object1 = {
    name : "mandir",
    "ability" : "sun-breathing",    //cant access with " . " operator
    [mySym] : "hey",
    age : 21,
    location : "Kolkata",
    email : "magic@google.com"
}

console.log(object1.name)
console.log(object1["age"])
console.log(object1[mySym])

object1.greet = function(){
    console.log(`function called bro, ${this.name}`)
}
object1.greet2 = function(){
    console.log("function called")
}

console.log(object1.greet) //---> returns reference to the fucntion
console.log(object1.greet()) //---> calls the fucntion

console.log(object1.greet2())
