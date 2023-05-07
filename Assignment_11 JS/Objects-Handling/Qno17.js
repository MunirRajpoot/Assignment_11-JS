//  17. Write a JavaScript function to check whether an object contains given property.

function hasProperty(obj, propName) {
    return obj.hasOwnProperty(propName);
  }
let obj={
        title: 'Mockingjay: The Final Book of The Hunger Games',
    
            author: 'Suzanne Collins',
    
         libraryID: 3245
};
console.log(hasProperty(obj, "title")); // output:  True
