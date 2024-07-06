const tinderuser1 = new Object()     //singletop object
const tinderuser2 = {}               //non-singleton object

console.log(tinderuser1)
console.log(tinderuser2)

tinderuser1.id = "123"
tinderuser1.name = "modna"
tinderuser1.isLoggedIn = false

console.log(tinderuser1)

const man = {
    feature : {
        head : {
            hair : "black",
            face : "tanned",
            moustache : false,
            beard : false
        },
        body : {
            shoulder : "wide",
            chest : "wide",
            waist : "normal"
        },
        legs : "skinny"
    }
}


console.log(man.feature.head)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = { obj1, obj2 }
console.log(obj3)

//stores objects inside object ==> obj3

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)         //==> target object


const obj5 = { ...obj1 , ...obj2 }
console.log(obj5)

//spreadingly stores object keys into another object

const USERS = [
    {
        id : 1,
        email : "m@google.com"
    },
    {
        id : 2,
        email : "n@google.com"
    },
    {
        id : 3,
        email : "h@google.com"
    }
]
console.log()
console.log(Object.keys(tinderuser1))
console.log(Object.values(tinderuser1))
console.log(Object.entries(tinderuser1))


console.log(tinderuser1.hasOwnProperty("name"))
