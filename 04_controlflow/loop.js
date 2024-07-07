const arr = [1,2,3,4,5,6,7]

for (const i of arr){
    console.log(i)
}


// Maps
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("JP", "Japan")

for(const [a, b] of map){
    console.log(`${a} :- ${b}`)
}

const ob = {
    J : "java",
    cpp : "c++",
    py : "python",
    sol : "solidity"
}

for (const key in ob){
    console.log(`${key} maps to ${ob[key]}`)
}



//call back function

// arr.forEach(function(item){
//     console.log(7-item)
// })

const arrr = ["w","e","r","t","y"]

const prt = (item) => {
    console.count(`${item} heyy`);
}

arrr.forEach(prt)