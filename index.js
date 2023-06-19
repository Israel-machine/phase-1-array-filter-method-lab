function findMatching(driverArray,string) {
    // console.log("drivers",driverArray)
    // console.log("string",string)

    let filteredNames =  driverArray.filter(function(name) {
        // console.log("name",name)
        return name.toUpperCase() === string.toUpperCase();
    })

    // console.log("filteredNames", filteredNames)
    
    return filteredNames
}

function fuzzyMatch(driverArray,string) {
    let fuzzyFilter = driverArray.filter(function(word) {
        // console.log({word,string})
        return word.indexOf(string) === 0;
    })
    return fuzzyFilter;
};

function matchName(driversArray,string) {
    // console.log(driversArray, string)
    let matchFilter = driversArray.filter(function(driver) {
        console.log(driver)
        return driver.name === string
    })
    return matchFilter
 }