// Add express framework
const express = require('express');
const app = express(); // Make a express constant
const port = process.env.PORT || 3000; /* Setup a port */
require('./db/conn.js');
// const student = require('./models/students')
const studentRouter = require('./routers/student')
// Type to Json
app.use(express.json());

// we need to register our router
app.use(studentRouter);

// listen port
app.listen(port, () => {
  console.log(`Connection Setup on Port ${port}`);
})
