##### Ejemplo 6
## Spread Operator

### OBJETIVO

### DESARROLLO
1. 

```javascript
const array = [1, 2];
const array2 = [...array, 3, 4];
console.log(array2) // [1, 2, 3, 4]
```


```javascript
const obj1 = {a: 'a', b: 'b'};
const obj2 = {c: 'c', ...obj1};

console.log(obj2) 
// {a: 'a', b: 'b', c: 'c'}
```