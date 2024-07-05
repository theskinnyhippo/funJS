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


console.log(man.head.face)