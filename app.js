// 1. Write an arrow function that uses the rest parameter to log the first element and the rest of the elements in an array.

const logFirstAndRest = (a, ...rest) => {
  console.log("First: ",a)
  console.log("Rest:", rest)
} 
  logFirstAndRest(1, 2, 3, 4, 5)

// 2. Write an arrow function that uses the rest parameter to log the first and second element and the rest of the elements in an array.
 console.log("\n")

const logFirstAndSecond = (a,b, ...rest) => {
  console.log("First:", a)
   console.log("Second:",b)
   console.log("Rest:",rest)
}

 logFirstAndSecond(12, 22, 33, 44, 55)

// 3. Write an arrow function that uses the rest parameter to calculate the product of numeric values.
 console.log("\n")

const calculateProduct = (...rest) => {
let a =1;
  for(let num of rest){
    a *= num
  }
  return a ;
    }
console.log(calculateProduct(2, 3, 4));
 console.log(calculateProduct(5, 2, 1, 3)); 


// 4. Write an arrow function that uses the rest parameter to concatenate an arbitrary number of words into a sentence.
 console.log("\n")

const createSentence = (...strings) => strings.join(" ")
console.log(createSentence("JavaScript", "is", "awesome"));

// 5. Write an arrow function that uses the rest parameter to calculate the sum of numeric values.
console.log("\n")

const findSum = (a,...numbers) => {
  let sum = 0;
  for(let number of numbers){
    sum += number
  }
   console.log(a,sum);
}
findSum("Sum of Numbers: ", 2, 4, 6, 8, 10)

// 6. Write an arrow function that uses the rest parameter to check if a specific value is present in an array. The first parameter that the function takes is the value that you have to find in the array
console.log("\n")

const containsValue = (a, ...rest) => {
  for(let val of rest){
    if(a === val){
      return true;
    }
  }
   return false;
}
 console.log(containsValue(3, 1, 2, 3, 4));
console.log(containsValue("apple", "banana", "orange")); 

// 7. Write an arrow function that uses the rest parameter to find the average of an arbitrary number of numeric values.

const calculateAverage = (...number) => {
  let totalNumOfDigit = number.length
  let sum = 0 ;
  for(let digit of number){
    sum += digit
  }
  return sum / totalNumOfDigit
} 
 console.log(calculateAverage(10, 5, 15)); 
console.log(calculateAverage(2, 4, 6, 8)); 
