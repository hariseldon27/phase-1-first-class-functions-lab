//below is a variable that calls an anonymous function
const returnFirstTwoDrivers = (arrayOfDrivers) => {
    // let firstTwo = arrayOfDrivers.slice(0,2)
    // return firstTwo
    //or
    return arrayOfDrivers.slice(0,2)
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
    let lastTwo = arrayOfDrivers.slice(-2)
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    //below is an an anonymous function with fare as a  that we are returning
    return (fare) => {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)
fareDoubler(10)

//below is a function that returns a function and the inner function is immediately invoked with the parameters passed.
//console.log(createFareMultiplier(2)(10)) // returns 20

const fareTripler = createFareMultiplier(3)
fareTripler(12)

//below is a funciton named selectDifferentDrivers which takes an array and a function (here the function it wants to call are the returnfirst and returnlast functions above) 
function selectDifferentDrivers(arrayOfDrivers, selectDriversFunction) {
    //below is the return of the function passed as the second parameter above, with arrayOfDrivers passed as the parameter
    return selectDriversFunction(arrayOfDrivers)
}