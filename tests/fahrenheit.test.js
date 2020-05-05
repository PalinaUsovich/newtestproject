const assert = require('assert');
const fahrenheitToCelsius = require('../scripts/fahrenheit');

describe ('Fahrenheit to Celsius Test', function (){
    it('should perform standart temperature converting', function (){
        
        assert.equal(
            fahrenheitToCelsius(50),
            10,
            'Function returned invalid temperature value'
        );
     });


    it ('test  negative temperature', function () {
        
        assert.equal(
            fahrenheitToCelsius(10),
           -12,
            'Does not return negative value'

        );

    })
    it('fahrenheitToCelsius returns invalid conver with non-number attribute',function (){
        assert.deepEqual(fahrenheitToCelsius('seven') , NaN);
    })
        
});