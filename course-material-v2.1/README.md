# Javascript Tips

## find the variable type

```javascript

const findType = (val) => {
    return toString.call(val);
}

console.log(findType('abc')) // [object String] 
console.log(findType(123)) // [object Number] 
console.log(findType(true)) // [object Boolean] 
console.log(findType([1,2,3])) // [object Array] 
console.log(findType({a:'aaa', b:'bbb'})) // [object Object] 
```
