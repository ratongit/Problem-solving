
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. //


const original = 'Raton Kumar';

function reverse(input) {
  let reversed = '';
  
  for (let i = input.length - 1 ; i>=0 ;i--) {
    // console.log(i)
    // console.log(input[i])
    reversed += input[i];
  }
  
  return reversed;
}

// console.log( reverse(original)); 



//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


// Only positive number's Addition by the code //
const numberOfArray = [2,-5,10,-3,7]

const positiveNumberSum= ()=>{
    let sum = 0;
      for( const number of numberOfArray){

       if(number >0){
       sum += number
       }
      
      } 
      return sum
}
// console.log("Only positive number's sum is ", positiveNumberSum(numberOfArray))


// All Number is Addition by the code//

      const addition = array => {
        const sum = array.reduce((previousNumber, currentNumber) => previousNumber + currentNumber, 0);
        return sum;
      }

      // console.log( "ALL number's sum is ", addition(numberOfArray))

      


      
      
      // Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 


      const input = [3, 5, 2, 5, 3, 3, 1, 4, 5];

      function findMostFrequentElement(array) {

        const frequency = {};
      

        for (const number of array) {

          // console.log(number)
          // console.log("frequency Counter", frequency[number])

          frequency[number] = (frequency[number] || 0)+1;

          // console.log(frequency[number])
        }
      
        let mostFrequentElement;
        let maxFrequency = 0;
      
        for (const number in frequency) {
          if (frequency[number] > maxFrequency) {
            maxFrequency = frequency[number];
            mostFrequentElement = number;
          }
        }
      
        return mostFrequentElement;
      }
      
      const repatriableNumber = findMostFrequentElement(input);

      // console.log( 'most repatriable number  : ' , repatriableNumber); 
      
      
      
      // Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
      
      const InputArrray = [1, 3, 6, 8, 11, 15];
      const target = 11;
      
      function findTwoNumbersWithSum(array, target) {
        let left = 0;

        // console.log("left is " , left)
        
        let right = array.length - 1;

        // console.log("right is " , right)
      
        while (left < right) {
          const sum = array[left] + array[right];

          // console.log("sum is ", sum)
      
          if (sum === target) {

            // console.log("left, right",[left, right])

            return [ left, right];

          } else if (sum < target) {

            //  console.log( "left++" ,left++ )
            
            left++;
            
          } else {

            //  console.log("right--",right--)

            right--;
          }
        }
        return []; 
      }
      
      const result = findTwoNumbersWithSum(InputArrray , target);

      // console.log('Additional array index is ', result); 



      
// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.



      const number1 = 0;
      const number2 = 10;
      const operator = '+';
      


function calculate(number1, operator , number2){
let calculation


  if(operator==='+'){
   calculation=number1+number2
  }
  else if(operator==='-'){
    calculation=number1-number2
   }
  else if(operator==='*'){
    calculation=number1 * number2
   }
   else if(operator==='/') {
    if (number2 === 0) {
              return 'Cannot divide by zero';
            }
    calculation=number1 / number2
   } 

return calculation
}

// console.log('Calculation is ', calculate(number1,operator,number2))


      

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


const passwordLength = 12;

function generateRandomPassword(length) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*';

  const createPassword = uppercase + lowercase + numbers + specialChars;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * createPassword.length);

    // console.log('random Index is', randomIndex)
    // console.log(Math.random())
    // console.log(Math.random()* createPassword.length)

    password += createPassword[randomIndex];

  }

  return password;
}

const randomPassword = generateRandomPassword(passwordLength);


// console.log('Created random password  is : ',randomPassword);


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanNumeral1 = "XIII";

function romanToInt(romanNumeral) {
  const romanNumeralsMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {

    // console.log('romanNumeral.length  : ',romanNumeral.length)

    const currentNumeral = romanNumeralsMap[romanNumeral[i]];

    // console.log('Roman Numeral', romanNumeral[i])
    // console.log('current Numeral : ' ,currentNumeral)
    
    const nextNumeral = romanNumeralsMap[romanNumeral[i + 1]];

    // console.log('Roman Numeral', romanNumeral[i+1])
    // console.log('next Numeral : ' , nextNumeral)

    if (nextNumeral > currentNumeral) {
      result += nextNumeral - currentNumeral;
      i++; 

    } else {
       result = result + currentNumeral;
    }
  }
  return result;
}

// console.log("Answer is ",romanToInt(romanNumeral1)); 


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


const arrayValue = [10,40,50,30,20,90,70,100]

function secondSmallestValue(arr){
  let first = Math.max(...arr),
   second = Math.max(...arr);

  for(let i = 0; i <= arr.length-1; i++){
      if(arr[i] < first){
          second = first;
          first = arr[i];
      }
      else if( arr[i] < second && arr[i] != first){
          second = arr[i];
        }
      }
      return second
}

secondSmallestValue(arrayValue);

console.log( 'Second Smallest Value is : ', secondSmallestValue(arrayValue))
