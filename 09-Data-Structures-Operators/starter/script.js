'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2 + 4]]: {
    open: 0, // Open 24 hours
    close: 24,
    [`day-${2 + 4}`]: 24, //new ES6 feature in object literals
  },
};

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

  // openingHours: openingHours,

  // ES6 enhanced object literals
  openingHours,

  // Destructuring object in function
  orderDelivery({ starterIndex, mainIndex, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
    // output:- Order received! Garlic Bread and Risotto will be delivered to Trivandrum at 22:30
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
////////////////////////////////////
// START looping Objects: Objects Keys, Values and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property NAMES
const values = Object.values(openingHours);
console.log(values);

// Entries NAMES
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, {open,close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

////////////////////////////////////
// END looping Objects: Objects Keys, Values and Entries
*/




/*
////////////////////////////////////
// START Optional Chaining (?.)

// optional chaining
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

// Methods
let order =
  restaurant.orderPasta?.('onion', 'mushroom', 'olive') ??
  'Method does not exists';
console.log(order);
console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');

// Arrays
const users = [{name: 'Vaishak', email: 'vaishak@gmail.com'}];
// const users = [];
console.log(users[0]?.name ?? 'User array is empty');


////////////////////////////////////
// END Optional Chaining (?.)
*/


/*
////////////////////////////////////
// START Enhanced object Literals

console.log(restaurant);

////////////////////////////////////
// END Enhanced object Literals
*/
const a = 'John';
first();

function first() {
  const b = "first!";
  second();
  console.log(b);

  function second() {
    const c = "Second!";
    third();
    console.log(c);
  }
}

function third() {
  const d = "third!"
  console.log(d);
  console.log( d + c + b + a);
}


/*
////////////////////////////////////
// START Looping Arrays: The for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

//Destructure the above for-of
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

////////////////////////////////////
// END Looping Arrays: The for-of loop
*/




/*
////////////////////////////////////
// START Coding Challenge #1

// 1.
const [player1, player2] = game.players;
console.log(player1,player2);

// 2.
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// 4.
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored)

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

////////////////////////////////////
// END Coding Challenge #1
*/

/*
////////////////////////////////////
// START Logical Assignment Operators

const rest1 = {
  name: 'A2a',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'John',
};

//OR assignment operator///////////////////
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//Nullish assignment operator (null or undefined)///////////////////
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

//AND assignment operator///////////////////
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

////////////////////////////////////
// END Logical Assignment Operators
*/


/*
////////////////////////////////////
// START The Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guest3 = restaurant.numGuests || 10;
console.log(guest3);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ? ? 10;
console.log(guestCorrect);

////////////////////////////////////
// END The Nullish Coalescing Operator (??)
*/



/*
////////////////////////////////////
// START Short Circuiting (&& and ||)

console.log('------OR------');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Vaishak');
console.log('' || 'Vaishak');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('------AND------');

console.log(0 && 'Vaishak');
console.log(29 && 'Vaishak');
console.log('Hello' && 23 && null && undefined && 0 && '');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'Onion');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'olives'); //Shorthand of above practical example

////////////////////////////////////
// END Short Circuiting (&& and ||)
*/



/*
////////////////////////////////////
// START REST pattern and Parameter

///// 1) START Destructuring

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]

//REST, because on LEFT side of=
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

//Objects
const {
  sat,
  ...weekdays
} = restaurant.openingHours;
console.log(weekdays);
///// 1) END Destructuring

///// 2) START Function

const add = function (...numbers) { //REST Parameter
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}
add(2, 3);
add(5, 4, 3, 4);
add(10, 2, 9, 8, 5, 4, 3, 4);

const x = [23, 5, 7];
add(...x);


restaurant.orderPizza('mushroom', 'onion', 'olives', 'chicken')
restaurant.orderPizza('chicken')

///// 2) END Function

////////////////////////////////////
// END REST pattern and Parameter
*/





/*
////////////////////////////////////
// START The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

//Adding new element to Array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


// Iterables: arrays, strings, maps, set. NOT objects
const str = 'Vaishak';
const letters = [...str, "K.B"];
console.log(letters);
console.log(...str);


// const ingredients = [prompt('Let\'s make pasta! ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {
  foundedIn: 1990,
  ...restaurant,
  founder: 'Babu'
}
console.log(newRestaurant);

const restaurantCopy = {
  ...restaurant
};
restaurantCopy.name = 'Babu K';
console.log(restaurant.name);
console.log(restaurantCopy.name);

////////////////////////////////////
// END The Spread Operator
*/


/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Trivandrum',
  mainIndex: 2,
  starterIndex: 2
});

// START ###################
// Destructuring Object ***************************

const {
  name,
  openingHours,
  categories
} = restaurant;
console.log(name); // output:- Classico Italiano
console.log(openingHours); // output:- {thu: {…}, fri: {…}, sat: {…}}
console.log(categories); // output:- (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Custom variable names for objects
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName); // output:- Classico Italiano
console.log(hours); // output:- {thu: {…}, fri: {…}, sat: {…}}
console.log(tags); // output:- (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Object with default value
const {
  menu = [], starterMenu: starters = []
} = restaurant
//If menu don't have default value as empty array then the output will be "undefined"
console.log(menu, ); // output:- []
console.log(starters); // output:- (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14
};
// {a, b} = obj; // ERROR:- Uncaught SyntaxError: Unexpected token '='
// to fix this error we need to wrap this in parentheses() as shown below
({
  a,
  b
} = obj);
console.log(a, b); // output:- 23 7

// Nested Objects
// const {fri: {open, close}} = openingHours;
const {
  fri: {
    open: o,
    close: c
  }
} = openingHours;
console.log(o, c); // output:- 11 23

// END ###################
// Destructuring Object ***************************
*/


/*
// START ###################
// Destructuring Array ***************************
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
// *********Destructuring nested array
const nested = [2, 4, [5,6]];
const [i, , j]=nested;
console.log(i, j); // output:- 2 (2) [5, 6]
const [k, , [l, m]]= nested;
console.log(k, l, m); // output:- 2 5 6
//Default Value
const [p=0, q=0, r=0] = [8, 9];
console.log(p, q, r); // output:- 8 9 0
*/
// END ###################
// Destructuring Array *************************** */
