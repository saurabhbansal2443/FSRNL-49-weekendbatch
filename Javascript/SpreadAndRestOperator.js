

// let arr1 = [10,20,30,40 ];

// let arr2 = ['a','b','c','d'];


// let ans = [...arr1 , ...arr2 , ...arr1 , ...arr2 , ...arr2]


// console.log(ans)


let obj1 = {
    name : "saurabh"
}

let obj2 = {
    age : 23 
}

let cobj = {
    ...obj1 , ...obj2
}

console.log(cobj)