import fs from "fs";


// CRUD -- Create Read Update Delete 
// for files - writefile, readFile , writeAndRead , unlink and rm 
// directory - 


//let fileContent = fs.readFileSync("./one.txt","UTF-8"); // donot use synchronous method as it will block the main thread 

// Reading the file 
// fs.readFile("./one.txt" , "UTF-8" , (err, data) => {
//     if (err) {
//         console.log(err)
//     }else{
//     console.log(data)
//     }
// })

// Writing the file 


// fs.writeFileSync("./one.txt" , "I am the content which is writeen by node ")

// fs.writeFile("./two.js" , "I am the content which is writeen by node " , (err, data) => {
//         if (err) {
//         console.log(err)
//     }else{
//     console.log(data)
//     }
// })

// let olderContent = fs.readFileSync("./one.txt" , "UTF-8");

// fs.writeFileSync("./one.txt", olderContent + "this is new content") ;


// fs.rm("./one.txt" ,(err, res) => {})

// fs.mkdir("./demo" , function(err){   // creating a folder/directory 
//     console.log(err)
// })

// fs.writeFile("./demo/one.txt" , "egdfegdfghe" , (err) => {
//     console.log(err)
// })


// fs.readdir("./demo" , (err, files) => { // reading the directory 
//     console.log(files)
// })

// fs.rmdir("./de")

// fs.rename("./demo" , "./changedName " ,(err, src) => {}) // updating the name of folder 

fs.rmdir("./demo" , (err)=>{
    console.log(err);
})
