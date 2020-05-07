
//     2. Write a function that takes a number as an argument (call it maxNum) 
function fizzBuzz (maxNum) {
  myArray= [];
    //and adds each number from 1 to maxNum to an array.
    for (let i=1; i<=maxNum; i++){
        
      
      if (i % 3 === 0 && i % 5 === 0){ 
        myArray.push(`FizzBuzz`);
    }else if (i % 3 === 0){
        myArray.push(`Fizz`);
    }else if (i % 5 === 0){
      myArray.push(`Buzz`);
    }else {
        myArray.push(i)
     }
     console.log(myArray);
    
    }
    
    return myArray;
    }
    module.exports = fizzBuzz;
    
    