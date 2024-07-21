
// let arr = [10,20,30,40,50,60];


// // let [a , b ,,d] = arr ;

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];

// console.log(a , b ,c ,  d)


let obj = {
    name : "saurabh",
    age : 23 ,
    company : "GFG"
}

let {age , company } = obj

console.log(  age , company)



function sum( a){
    return function ( b){
        return a+ b ;
    }
}

let fn = sum(2)

console.log( fn(3))