//Variable for testing purposes
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


// Finds matching drivers
function findMatching(array, name) {
    const matchingName = array.filter(arr => {
        return arr.toLowerCase() === name.toLowerCase();
    })
    return matchingName;
}

//Searches by first letters
function fuzzyMatch(array, name) {
    const matchingName = array.filter(arr => {
        return arr.startsWith(name);
    });
    return matchingName;
}

//
function matchName(object, name) {
    const matchingName = object.filter(obj => {
        return obj.name === name;
    });
    return matchingName;
}

//Test output
console.log(matchName(drivers, "Sammy"))