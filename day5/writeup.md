# JavaScript Practice - Day 5
## Array
- a container that can hold more than one value at once
- Syntax:

        let [array name] = ["array", "values"];
- The array's index starts at 0 

        console.log(arr[0]);    // prints the first element
- Print all of the array's values at once in the console using this: `console.log([array name]);`
## pop() and shift()
- `pop()` - removes the last element of the array and returns it
- `shift()` - removes the first element of the array and returns it
## length and unshift()
- `length` - returns the length of the array
- `unshift()` - adds values in front of the array and returns the new array length
## indexOf() and includes()
- `indexOf()` - returns the index of the first occurrence of an element; returns `-1` if the element doesn't exist in the array
- `includes()` - returns `true` if the element is in the array and `false` if not
## toString() and join()
- `toString()` - returns one comma-separated string of all the array's values
- `join()` - returns one delimiter-separated string of all the array's values; comma is the default separator if the delimiter is not stated