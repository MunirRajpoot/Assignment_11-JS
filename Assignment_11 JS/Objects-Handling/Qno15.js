//  15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
let obj= {
    name : "Hamad" ,
    fName: "Khalil" ,
    age: 20 ,
    country : "Pakistan", }
    for (const[key,value] of Object.entries(obj))
    console.log(`${key} ${value}`)