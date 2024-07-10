const fs = require("fs")

//Read a file//
// fs.readFile("./test.txt" ,"utf-8" ,(arr,data) =>{
//     if(arr){
//         console.log("err" , err)
//     }
//     else{
//         console.log("data" , data)
//     }
// })

// Delete a file//

// fs.unlink("test.txt" ,(err) =>{
//     if(err){
//         console.log("Error deleting file:",err )    
//     }
//     console.log("File Delete Succesfully")

// })

// Creating a File

// fs.writeFile("test.txt" ,"Hello World" , (err)=>{
//     if(err){
//         console.log("err",err)
//     }
//     else{
//         console.log("Succesfull Created")
//     }
// })


//Appending a file

// fs.appendFile("text.txt" , "\n" + "Hello Second Line", (err) =>{
//     if(err){
//         console.log("err" ,err)
//     }
//     else{
//         console.log("Successfully Added")
//     }
// })



// Rename a file

// fs.rename("NewFile.txt" ,"newfile.txt" ,(err)=>{
//     if(err){
//         console.log("Error In Renaming a file" , err)
//     }
//     console.log("File renamed successfully")
// })



