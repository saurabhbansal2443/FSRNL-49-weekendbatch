// function is a block  of code that is used to do specific task 

// write a function so that it finds the factorial of a number 


// function factorial(n){

//     if(n==0 || n==1 ) return 1 ;

//     let ans = 1 ;

//     for(let i=1 ; i<=n;i++){
//         ans = ans *i ;
//     }

//     return ans ;
// }


// console.log(factorial(5));

// let greet = function (){
//     console.log("GoodNight");
//     return 1 ;
// }



// console.log( greet);   


// shallow copy and deep copy of object 

// How to make copy of objects 

let obj = {
    name : "saurabh",
    age : 23 , 
    address : {
        street : "Rohini",
        city: "Delhi",
        country : "India"
    }
}

let copyobj = obj ; // shallow copy 

let copyobj2 = JSON.parse(JSON.stringify(obj)); // deep copy

let copyobj3 = {...obj}; // mixture of deep and shallow copy 


copyobj3.address.city = "London";


console.log("obj" , obj );

console.log("copy obj " , copyobj3 );

// let objStr = JSON.stringify(obj)

// let obj2 = JSON.parse(objStr)

// console.log("obj", obj2);










