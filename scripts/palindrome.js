function isPalindrome(word) {
    //making all symbols to lower case 
    var lowSrting = word.toLowerCase().replace();
    var reverseStr = lowSrting.split('').reverse(/[^a-zA-Z0-9]+/g,'').join(''); 
    

if(lowSrting!==reverseStr) {
    
console.log(`not a palindrome  ${word} - ${reverseStr}`);
return false;

}else{
    
console.log(`palindrome ${word} - ${reverseStr} `);
return true;

}
//return lowSrting === reverseStr;
}
 module.exports = isPalindrome;