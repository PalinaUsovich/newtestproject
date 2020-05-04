const assert = require('assert');
const fahrenheitToCelsius = require('../scripts/fahrenheit');

describe ('Fahrenheit to Celsius Test', function (){
    it('should perform standart temperature converting', function (){
        let tempInFahrenheit = 70;
        let expectedTempInCelsius = 21;
        let returnedTempInCelsius = fahrenheitToCelsius(tempInFahrenheit);
        assert.equal(
            returnedTempInCelsius,
            expectedTempInCelsius,
            `${tempInFahrenheit} F is not ${returnedTempInCelsius} C`
        );


    });
    it ('test  negative temperature', function () {
        let tempInFahrenheit = 10;
        let expectedTempInCelsius = -12;
        let returnedTempInCelsius = fahrenheitToCelsius(tempInFahrenheit);
        assert.equal(
            returnedTempInCelsius,
            expectedTempInCelsius,
            `${tempInFahrenheit} F is not ${returnedTempInCelsius} C`
        );
    })
        
});