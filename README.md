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

![alt text](https://github.com/Vaishakbg/javascript-complete-course/blob/master/assets/images/scope-chain-vs-call-stack.png);

#

### Hoisting in Javascript

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or call a function even before it is declared in your code. However, it's important to note that only the declarations are hoisted, not the initializations.

1. **Variable Hoisting:**
    ```javascript
    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5
    ```
    In the example above, the declaration `var x;` is hoisted to the top of its scope during compilation, but the initialization (`x = 5;`) remains in place. So, when `console.log(x);` is encountered, `x` exists but is `undefined`.

2. **Function Hoisting:**
    ```javascript
    hello(); // "Hello, hoisted function!"

    function hello() {
    console.log("Hello, hoisted function!");
    }
    ```
    In this example, the entire function declaration is hoisted, including its body. So, when `hello();` is called before the function declaration, it works as expected.

3. **Function Expression Hoisting:**
    ```javascript
    expression(); // Error: expression is not a function

    var expression = function() {
    console.log("I am a function expression");
    };
    expression(); // "I am a function expression"
    ```
    In contrast to function declarations, function expressions are not hoisted in the same way. In the example above, if you try to call `expression();` before the variable declaration, it will result in an error.

4. **var vs let/const:**
    ```javascript
    console.log(foo); // undefined
    var foo = "I am a variable";

    console.log(bar); // Error: bar is not defined
    let bar = "I am a variable";
    ```
    In this example, the `var` declaration is hoisted, so `console.log(foo);` doesn't throw an error, but it logs `undefined`. On the other hand, `let` declarations are also hoisted but not initialized until the declaration statement, so trying to access `bar` before the declaration results in an error.