
//     2. Write a function that takes a number as an argument (call it maxNum) 
function fizzBuzz (maxNum) {
    
    //and adds each number from 1 to maxNum to an array.
    for (i=0; i<=maxNum; i++){
      myArray= [];
      let number = i;
      if (number % 3 === 0 && number % 5 === 0){ 
        myArray.push(`FizzBuzz`);
    }else if (number % 3 === 0){
        myArray.push(`Fizz`);
    }else if (number % 5 === 0){
      myArray.push(`Buzz`);
    }else {
        myArray.push(i)
     }
     console.log(myArray);
    
    }
    
    return myArray;
    }
    module.exports = fizzBuzz;
    
    