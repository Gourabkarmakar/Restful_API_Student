// Add a framwork
const express = require('express');
const app = express(); // Make a express constant
const port = process.env.PORT || 3000; /* Setup a port */
require('../db/conn.js');
const student = require('../models/students')

// Type to Json
app.use(express.json());

// Create a Get request
app.get("/", (req, res) => {
  res.send(" Hello From server To Client From @Gksecurity ")
})

// Create a post Request To Create a student
// app.post('/students', (req, res) => {
//   console.log(req.body)
//   const user = new student(req.body)
//
//   user.save().then(() => {
//     res.status(201).send(user)
//   }).catch((error) => {
//     res.status(400).send(`Got error: ${error}`)
//   })
//
// })

// Promise Async and Await
app.post('/students',async(req, res)=>{

  try {
    const user = new student(req.body);

    const createUser = await user.save();
    res.status(201).send(user)
  }
  catch (error) {
    res.status(400).send(`Got error: ${error}`)
  }


})

// listen port
app.listen(port, () => {
  console.log(`Connection Setup on Port ${port}`);
})
