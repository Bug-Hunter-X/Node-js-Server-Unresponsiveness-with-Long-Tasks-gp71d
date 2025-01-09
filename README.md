# Node.js Server Unresponsiveness with Long Tasks

This repository demonstrates a common issue in Node.js applications where long-running tasks can cause the server to hang or become unresponsive to new requests.  The example uses `setTimeout` to simulate a long task, but this could represent any blocking operation.

The `server.js` file shows the problematic code.  The `serverSolution.js` file provides a solution using asynchronous operations and promises or async/await to prevent blocking.

## How to reproduce

1. Clone this repository.
2. Run `npm install express` in the project directory.
3. Run `node server.js`.
4. Send multiple requests to `http://localhost:3000/`. You'll likely notice that after a few requests the server struggles to respond quickly or might become unresponsive.

## Solution

The solution uses asynchronous operations to prevent the server from blocking.  Examine `serverSolution.js` for an improved implementation.