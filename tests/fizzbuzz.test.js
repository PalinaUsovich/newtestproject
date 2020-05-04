let assert = require('assert');
const fizzBuzz = require('../scripts/FizzBuzz');

describe ('Fizzbuzz test' , function() {
    
    

    it ('Should return FIZZ when can devide by 3' , function (){
        let fizzNumbers = fizzBuzz(15);
        assert.equal( 3 ,`Fizz` , '%3');
    });
    it ('Should return Buzz when can devide by 5', function() {
        let fizzNumbers = fizzBuzz(15);
        assert.equal(fizzNumbers [5], `Buzz` , '%5');
    });
  
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
    
    