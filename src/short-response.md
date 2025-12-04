# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Using the code block below, explain what it means for a function call to be an "expression that resolves/evaluates to a value."

```js
const double = (num) => {
  return num * 2;
};

const result = double(5);
```

In your response, make sure to cover the following details:

1. Explain what an "expression" is.
2. Explain how it is determined what value a function call will resolve/evaluate to.
3. Explain why function calls sometimes resolve/evaluate to `undefined`.

### Response 1

An **expression** is a piece of **code** that evaluates to a value.

A **function call** evaluates to the resolution of the expression in the **return statement** inside the function.

If no expression is given to the return statement, or if not return statement is provided, the function call will implicitly evaluate to `undefined`

---

## Prompt 2

Analyze the following code. Then, fill in the template below with the callstack and the values of all variables at the moment when the `getFirstLetter()` function has just been called _for the first time_ but has NOT yet returned.

```js
const buildProfile = (firstName, lastName, age) => {
  const fullName = createFullName(firstName, lastName);
  const initials = extractInitials(firstName, lastName);
  const bio = `${fullName} (${initials}) - Age: ${age}`;
  return bio;
};

const createFullName = (first, last) => {
  const fullName = first + " " + last;
  return fullName;
};

const extractInitials = (first, last) => {
  const firstInitial = getFirstLetter(first); // <--- we're in this function call
  const lastInitial = getFirstLetter(last);
  return firstInitial + lastInitial;
};

const getFirstLetter = (name) => {
  // ***draw the callstack at this moment before the return***
  return name[0].toUpperCase();
};

const userProfile = buildProfile("reuben", "ogbonna", 24);
console.log(userProfile); // reuben ogbonna (RO) - Age: 24
```

**Your response should include:**

1. A diagram of the callstack showing all functions currently executing (most recent calls at the top)
2. All variables in each scope with their current values
   - Use `waiting` for variables waiting to receive a value from a function call
   - Use `undefined` for variables not yet assigned a value

### Response 2

```
Callstack: (recent calls at the top)
---------------------------
[           ]
[           ]
[           ]
[           ]


Variables by Scope:
---------------------------
Global Scope:
- buildProfile = ?
- createFullName = ?
- extractInitials = ?
- getFirstLetter = ?
- userProfile = ?

buildProfile() scope:
- firstName = ?
- lastName = ?
- age = ?
- fullName = ?
- initials = ?
- bio = ?

createFullName() scope:
- (list any parameters/variables)

extractInitials() scope:
- first = ?
- last = ?
- firstInitial = ?
- lastInitial = ?

getFirstLetter() scope:
- name = ?
```

---

## Prompt 3

These two code snippets look similar but behave differently. Explain what each one prints and WHY they produce different results. Use the proper scope terminology in your explanation. Feel free to run these code blocks.

Example A:

```js
let count = 0;

const incrementA = () => {
  count = count + 1;
};

incrementA();
console.log(count);
```

Example B

```js
let count = 0;

const incrementB = () => {
  let count = 0;
  count = count + 1;
};

incrementB();
console.log(count);
```

### Response 3

The first code snippet will print the number 1.

Second code snippet will print the number 2.

The difference is that in the second code snippet, we are **initializing** a new `count` **variable** using the `let` **keyword** (`let` variables are block scoped) and updating its value inside the **scope** of the `incrementB` function. This doesn't update the value of the `count` variable that was declared in the **global scope**.

---

## Prompt 4

You need to remove a student's name from an array of enrolled students. Your coworker suggests two approaches:

```js
// Approach A:
const index = students.indexOf(nameToRemove);
students.splice(index, 1);

// Approach B:
const newStudents = [];
for (let i = 0; i < students.length; i++) {
  if (students[i] !== nameToRemove) {
    newStudents.push(students[i]);
  }
}
```

Which approach would you choose and why? In your answer, identify at least one potential bug and explain the tradeoff between these approaches.

### Response 4

I would choose approach A, but I would add a **guard clause**, because if the name to remove was not present in the `students` array, the `indexOf` method would **return** -1, which would cause an incorrect **element** to be removed.

Approach B takes more lines of code, and it doesn't accomplish the task at hand, we were asked to remove a student's names from an **array**, not create a new array.

---

## Prompt 5

Label the basic array methods below with a 1-sentence description of what they do. Indicate with `(mutating)` or `(non-mutating)` whether or not the method directly mutates the array

### Response 5

- `push(value)` - adds a given value to the end of an array `(mutating)`
- `pop()` - removes the last element of an array `(mutating)`
- `shift()` - removes the first element of an array `(mutating)`
- `unshift(value)` - adds a given value to the beginning of an array `(mutating)`
- `splice(index, deleteCount)` - changes the contents of an array, removing or replacing existing elements `(mutating)`
- `slice(start, end)` - returns a subarray of a given array, selected from `start` to `end` `(non-mutating)`
