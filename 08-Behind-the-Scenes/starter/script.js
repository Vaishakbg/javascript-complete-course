'use strict';

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); // 31
// console.log(oldAge); // 30

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log(' Friend: ', friend);
// // {name: 'Jonas' , age: 27}
// console.log('Me: ', me);
// // {name: "Jonas' age: 27 }



let lastName = "Babu"
let oldLastName = lastName
lastName = "Vaishak"
console.log(lastName, oldLastName);

const reshma = {
    firstName: 'Reshma',
    lastName: 'Babu'
}
const marriedReshma = reshma;
marriedReshma.lastName = 'Vaishak'
marriedReshma.status = 'Married'
console.log('Before Marriage', reshma);
console.log('After Marriage', marriedReshma);

//Copying Object

const reshma2 = {
    firstName: 'Reshma',
    lastName: 'Babu',
    family:['Babu', 'Anitha', 'Roshith']
}
const marriedReshma2 = Object.assign({}, reshma2); //This works only with first level.
marriedReshma2.lastName = 'Vaishak'
marriedReshma2.status = 'Married'
marriedReshma2.family.push('Vaishak')
console.log('Before Marriage', reshma2); // family array will have
console.log('After Marriage', marriedReshma2);