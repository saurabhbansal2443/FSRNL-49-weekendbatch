
// let sum = (a,b)=>{
//     return a+b;
// }

// let sub = (a,b)=>{
//     return a-b;
// }


// function calc(a,b , cbFn){
//     return cbFn(a,b);
// } 


// console.log(calc(3,4,sub))

// console.log("Start")

// function makeMaggi(){
//     setTimeout(function(){
//         console.log("Maggi is here ")
//     },2000)
// }

// makeMaggi();

// console.log("End")


// callback hell 

function task1() {
    setTimeout(function () {
        console.log("task1 Done ")
        function task2() {
            setTimeout(function () {
                console.log("task2 Done ")
                function task3() {
                    setTimeout(function () {
                        console.log("task3 Done ")
                    }, 2000)


                }

                task3()

            }, 2000)

        }
        task2()

    }, 2000)
}

task1()





