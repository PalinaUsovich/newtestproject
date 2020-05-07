let assert = require('assert');
const fizzBuzz = require('../scripts/FizzBuzz');

describe ('Fizzbuzz test' , function() {
    it('Should perforn regular test scenario', function() {
        let fizzBuzzNumbers = fizzBuzz(15);
        assert.deepEqual(fizzBuzzNumbers[0], `1`, 'can not devide 3 or 5');

    });
    it ('Should return Buzz if divisible by 5', function (){
        let fizzBuzzNumbers = fizzBuzz(15);
        assert.equal(fizzBuzzNumbers[9], `Buzz`, 'wrong number or not divisible');
    });
    it ('Should return Fizz if divisible by 3 ', function (){
        let fizzBuzzNumbers = fizzBuzz(30);
        assert.equal(fizzBuzzNumbers[2], `Fizz`, 'not divisible by 3 ');
    })
    
   

  
});

// function fizzBuzz (maxNum) { 
    
//     //and adds each number from 1 to maxNum to an array.
//     for (i=0; i<=maxNum; i++){
//       myArray= [];
//       let number = i;
//       if (number % 3 === 0 && number % 5 === 0){ 
//         myArray.push(`FizzBuzz`);
//     }else if (number % 3 === 0){
//         myArray.push(`Fizz`);
//     }else if (number % 5 === 0){
//       myArray.push(`Buzz`);
//     }else {
//         myArray.push(i)
//      }
//      console.log(myArray);
    
//     }
    
//     return myArray;
//     }
//     module.exports = fizzBuzz;
    
    