
// closures - A function will always carry Its lexical Scope 

let obj = (function counter(){

let count = 0 ;


// function increment(){
//     count++;
//     console.log(count);
// }

// function decrement(){
//     count--;
//     console.log(count);
// }

// let obj = {
//     incFn : increment,
//     decFn : decrement
// }

// return obj ;

return {
    incFn : function(){
        count++;
        console.log(count);
    },
    decFn : function(){
        count--;
        console.log(count);
    }
}
})()




obj.incFn();
obj.incFn();
obj.incFn();
obj.incFn();

obj.decFn();

count = 50 ;

obj.incFn()



