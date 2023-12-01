# Javascript Tips

## find the variable type

```javascript

const findType = (val) => {
    return toString.call(val);
}

console.log(findType('abc)) // [object String] ]
```
