import _ from 'lodash'

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = _.map(numbers, num => num * 2);
const a = _.map(numbers, num => num *10);


// console.log(doubledNumbers);
// console.log(a);


const birthYear = [1975, 1997, 2002, 1995, 1985]

const ages = _.map(birthYear, year => 2023 - year)

// console.log(ages);

const driverLicence = _.map(birthYear, age => age + 18)
console.log(driverLicence);