let assert = require('assert'); 
let calculateStudentGrade = require('../scripts/grade');

describe ('Grade test', function() {
    it ('score should not be a negative number', function () {
        assert.equal(
            calculateStudentGrade(-10,100),

            false,
            'Expected calculateStudentGrade to return false for negative number'

            
        );
       });
    it ('should return true for the right result' , function() {
        assert.equal(
            calculateStudentGrade (50,100),
            true,
            'Expected calculateStudentGrade to return true for the right number format'
        );

     });



}
) 