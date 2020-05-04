function fahrenheitToCelsius(tempF) {
    //calculation formula 
    //let tempCelsius;
       tempCelsius = (tempF-32)*5/9;
       tempCelsius = Number(tempCelsius.toFixed(2));
    console.log(`${tempF}°F is ${tempCelsius}°C`);
  // - Return temperature in Celsius
  return tempCelsius;
  }
  //calling a function
  //fahrenheitToCelsius(80);

  module.exports = fahrenheitToCelsius;