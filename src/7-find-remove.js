/* 
Analyze the following code. Explain what happens when the function is called. Then, identify the bug and fix it.

<Your explanation goes here>

the target item does not exist in the array, when the method indexOf doesn't find the target it returns -1
when we use the splice method with the inputs (-1, 1), it start + array.length is used instead of -1
which results in the last element of the array being removed. we can add a guard clause to fix this

*/
const findAndRemove = (arr, target) => {
  if (arr.includes(target)) {
    const index = arr.indexOf(target);
    arr.splice(index, 1);
    }
  
  return arr;
}

const items = ["apple", "banana", "orange"];
findAndRemove(items, "grape");
console.log(items); // This should print ["apple", "banana", "orange"]
