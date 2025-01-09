const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate a long-running task asynchronously
    res.send('Hello World!');
  } catch (err) {
    console.error('Error processing request:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});