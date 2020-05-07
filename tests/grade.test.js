let assert = require('assert'); 
let calculateStudentGrade = require('../scripts/grade');

describe ('Grade test', function() {
    
      
    it ('should return ' , function() {
       
        assert.equal(
            
           calculateStudentGrade(50,100),
             `F`,
            'Expected calculateStudentGrade to return grade  for the right number format'
        );
    });
});
        




