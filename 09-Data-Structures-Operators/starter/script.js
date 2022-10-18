'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  // Destructuring object in function
  orderDelivery: function({starterIndex, mainIndex, time = '20:00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    // output:- Order recieved! Garlic Bread and Risotto will be delivered to Trivandrum at 22:30
  },
};

restaurant.orderDelivery({time: '22:30', address: 'Trivandrum', mainIndex: 2, starterIndex: 2 });

// START ###################
// Destructuring Object *************************** */

const { name, openingHours, categories } = restaurant;
console.log(name); // output:- Classico Italiano 
console.log(openingHours); // output:- {thu: {…}, fri: {…}, sat: {…}} 
console.log(categories); // output:- (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Custom variable names for objects
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName); // output:- Classico Italiano 
console.log(hours); // output:- {thu: {…}, fri: {…}, sat: {…}} 
console.log(tags); // output:- (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Object with default value
const {menu = [], starterMenu: starters = []} = restaurant
//If menu don't have default value as empty array then the output will be "undefined"
console.log(menu,); // output:- []
console.log(starters); // output:- (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b:7, c:14 };
// {a, b} = obj; // ERROR:- Uncaught SyntaxError: Unexpected token '='
// to fix this error we need to wrap this in parentheses() as shown below
({a, b} = obj);
console.log(a, b); // output:- 23 7

// Nested Objects
// const {fri: {open, close}} = openingHours;
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c); // output:- 11 23

// END ###################
// Destructuring Object *************************** */

// START ###################
// Destructuring Array *************************** */
/*
const arr = [2,4,6];
const a = arr [0];
const b= arr[1]
const c= arr[2]

const [x, y, z] = arr;
console.log(x,y,z);
console.log(arr);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary); // output:- Italian Vegetarian

// *********Switching variables value with temp Variable*******
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('Switch 2 variables: ', main, secondary); // output:- Switch 2 variables:  Vegetarian Italian

// *********Switching variables with destructuring*******
[main, secondary] = [secondary, main]
console.log('Switch 2 variables: ', main, secondary); // output:- Switch 2 variables:  Vegetarian Italian

// *********Receive 2 return values from a function*******
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse); // output:- Garlic Bread Pizza

// *********Destruturing nested array
const nested = [2, 4, [5,6]];
const [i, , j]=nested;
console.log(i, j); // output:- 2 (2) [5, 6]
const [k, , [l, m]]= nested;
console.log(k, l, m); // output:- 2 5 6

//Default Value
const [p=0, q=0, r=0] = [8, 9];
console.log(p, q, r); // output:- 8 9 0
*/
// END ###################
// Destructuring Array *************************** */