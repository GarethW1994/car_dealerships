const assert = require('assert');
var cars = require('./cars.json');

mostPopularCar = function(cars) {
  var carMap = {};

  var highVal = 0;
 var car = '';
  for (var i = 0; i < cars.length; i++) {
    var carList = cars[i];
    var carMake = carList.make;

    if (carMap[carMake] === undefined) {
      carMap[carMake] = 0;
    }

    carMap[carMake] = carMap[carMake] + 1;
    //carMakeArr.push(carMake);
  }

  for (var make in carMap) {
    if (highVal < carMap[make]) {
        highVal = carMap[make];
        car = make + " : ";
    }
  }
  return car + highVal;
}
assert.equal(mostPopularCar(cars), 'Toyota : 13');
console.log(mostPopularCar(cars));
