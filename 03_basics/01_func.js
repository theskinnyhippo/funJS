function print(){
    for(i=0; i<3 ; i++){
        console.log(i+1);
    }
}

print()

function loginUser(username = "anonymous User"){
    return `${username} just logged in`
}

console.log(loginUser())
console.log(loginUser("mandir"))

//rest and spread operators are the same syntactically
// e-com website lart system
function restOp(...num1){
    return num1;
}

console.log(restOp(100,200,300,150))

function restOp_(val1, val2, ...num1){
    return num1;
}

console.log(restOp_(100,200,300,150))