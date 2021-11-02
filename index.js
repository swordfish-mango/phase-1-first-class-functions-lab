const returnFirstTwoDrivers = (callbackArray) => [callbackArray[0],callbackArray[1]];
const returnLastTwoDrivers = (callbackArray) => [callbackArray[callbackArray.length-2],callbackArray[callbackArray.length-1]]; 
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier = (int) => function(multiplier) {return multiplier*int; };
const fareDoubler = (fare) => createFareMultiplier(fare)(2);
const fareTripler = (fare) => createFareMultiplier(fare)(3);
const selectDifferentDrivers = (arrayOfDrivers, driverFunction) => driverFunction(arrayOfDrivers);