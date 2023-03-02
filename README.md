# Programming Fundamentals: Arrays

## Setup

- Fork this repository and clone your forked version to your machine
- Install dependencies by running the command below while in the project's root directory:

`npm ci`

## Instructions

- Read through the numbered comments in `src/core.js` to understand the core requirements of this exercise.

- Write your code directly below the numbered comment.

- Add `console.log`'s tbo get visiility on your solution and run the file with the command `node src/core.js`

**Example**

```js
// 1. Create a variable named hello with the value 'Hello'
const hello = 'Hello'
console.log(hello)
```

## Running tests

- When ready to test your solution is correct, run the test suite with the command `npm test`
- To begin with, all of the tests will fail. You'll see red `F`'s in your console, like the image below:

![](./img/test-fail.png)

- Your solution is complete when the red `F`'s have been replaced with green `.`'s in your console, like the image below:

![](./img/test-success.png)


## Extension

- If you finish the core criteria, you can follow the same development process for the `src/extension.js` file
- To run the extension tests, use the command `npx jasmine spec/extension.spec.js`
