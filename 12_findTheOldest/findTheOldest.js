const findTheOldest = function(people) {
    return people.reduce((firstPerson, secondPerson) => {
        console.log(firstPerson.name)
        if(firstPerson.yearOfDeath === undefined){
            firstPerson.yearOfDeath = (new Date()).getFullYear()
        }
        if(secondPerson.yearOfDeath === undefined){
            secondPerson.yearOfDeath = (new Date()).getFullYear()
        }

        return firstPerson.yearOfDeath - firstPerson.yearOfBirth > secondPerson.yearOfDeath - secondPerson.yearOfBirth ? firstPerson : secondPerson
    })
};

// Do not edit below this line
module.exports = findTheOldest;
