let assert = require('assert'); 
const isPalindrome = require(`../scripts/palindrome`);
describe('isPalindrome test', function () {
  
  
  it('isPalindrome returns true for valid palindrome ', function () {
    assert.equal(
      isPalindrome('dad'), // actual result
      true, // expected result
      'Expected isPalindrome to return true for palindromes' // Error message (optional), displayed in console when test fails
    
    )
  });
  it('isPalindrome returns false for invalid palindrome ' ,function() {
    assert.equal(
      isPalindrome('milk'),
      false,
      'Expected isPalindrome to return false for palindromes'
      
    );
 });

  
});
     
    
    


  



  




