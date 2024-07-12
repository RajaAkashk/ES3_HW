// Spread Operators

// Dupicate Array 

let  numbersArr = [1,2,3]
console.log(numbersArr)
let newNumbersArr = [...numbersArr]
newNumbersArr.push(4)
console.log(newNumbersArr)

const duplicateArray = (arr) => [...arr]
console.log(duplicateArray(["apple","banana"]))

// adding new element to an array 

const addNewElement = (arr,element) => [...arr, element]
console.log(addNewElement(["kiwi","orange"],"mango"))

// combine two array

const combineArr = (arr1,arr2) => [...arr1, ...arr2]
console.log(combineArr([11,12,13],[14,15]))

//copying object
// and adding a property to an object

const copyObject = (obj, key, value) => ({...obj, [key]:value})
console.log(copyObject({name: "Alice", age:20}, "favColor","blue"))
  

