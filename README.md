# Complete JavaScript Course

## Javascript Releases...

ES5 -> ES6/ES2015 -> ES7/ES2016 -> ES8/ES2017 -> ES9/ES2018 -> ES10/ES2019 -> ES11/ES2020 -> ... 

## Javascript Fundamentals

### Data Types
    
1. Primitive Data Types
    1. Number
    2. String
    3. Boolean
    4. Undefined
    5. Null
    6. Symbol (ES2015): Value that is unique and cannot be changed.
    7. BigInt (ES2020): Larger integers than the Number type can hold.
    
2. Non-Primitive Data Types
    1. Object
    2. Array

JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

#

### Reviewing Functions

1. **Function declaration**

    Function that can be used before it’s declared.
    ```javascript
    function calcAge(birthYear) {
        return 2037 - birthYear;
    }
    ```
2. **Function expression**

    Essentially a function value stored in a variable
    ```javascript
    const calcAge = function (birthYear) {
        return 2037 - birthYear;
    }
    ```
3. **Arrow function**

    Great for a quick one-line functions. Has no this keyword
    ```javascript
    const calcAge = (birthYear) => 2037 - birthYear;
    ```

#

### Scope And The Scope Chain

   ***Scoping:*** How our program’s variables are organized and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?";

   ***Lexical scoping:*** Scoping is controlled by placement of functions and blocks in the code;

   ***Scope:*** Space or environment in which a certain variable is declared (variable environment in case of functions). There is ***global*** scope, ***function*** scope, and ***block*** scope;

1. **Global Scope**
    * Outside of any function or block
    * Variables declared in global scope are accessible everywhere


    ```javascript
    const name = 'John';
    const age = 26;
    const year = 1992;
    ```
2. **Function Scope**
    * Variables are accessible only inside function, NOT outside
    * Also called local scope


    ```javascript
    function calcAge (birthYear) {
        const now = 2037;
        const age = now - birthYear;
        return age;
    }

    console.log(now); // ReferenceError
    ```
3. **Block Scope (ES6)**
    * Variables are accessible only inside block (block scoped)
    * HOWEVER, this only applies to ***let*** and ***const*** variables!
    * Functions are also block scoped (only in strict mode)


    ```javascript
    if (true) {
        let blockVariable = 'I am in a block';
        console.log(blockVariable); // Accessible here
    }
    console.log(blockVariable); // Error: blockVariable is not defined outside the block
    ```