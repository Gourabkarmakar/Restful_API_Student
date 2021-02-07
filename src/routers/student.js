const express = require('express');
// Create A New Router
const router = new express.Router();
const student = require('../models/students');

// We Need to define the router


// Create a Get request
router.get("/", (req, res) => {
  res.send(" Hello From server To Client From @Gksecurity ")
})

// Create a post Request To Create a student
// router.post('/students', (req, res) => {
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
router.post('/students', async (req, res) => {

  try {
    const user = new student(req.body);

    const createUser = await user.save();
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send(`Got error: ${error}`)
  }

})

// Read The Data Of Registered Students using Promises
router.get("/students", async (req, res) => {
  try {
    // use student collection Get data
    const studentsData = await student.find();
    res.send(studentsData);
  } catch (error) {
    res.send(`Got error: ${error}`)
  }
});

// Get Individual Data using id
router.get('/students/id:id', async (req, res) => {
  try {
    const _id = await req.params.id;
    const studentData = await student.findById(_id);
    console.log(studentData);

    if (!studentData) {
      res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (error) {
    res.status(500).send(error);
  }
})

//Get Individual data using Name
router.get('/students/studentname=:name', async (req, res) => {
  try {
    const name = await req.params;
    const studentNameData = await student.findOne(name);
    console.log(studentNameData);

    if (!studentNameData) {
      res.status(404).send();
    } else {
      res.status(200).send(studentNameData);
    }
  } catch (error) {
    res.status(500).send(error);
  }
})

// Update Student by id
router.patch('/students/id=:id', async (req, res) => {
  try {
    const getid = await req.params.id;
    const updateStudent = await student.findByIdAndUpdate(getid, req.body, {
      new: true,
    });
    res.status(200).send(updateStudent);
  } catch (error) {
    res.status(404).send(error);
  }
})

// Delete student By id
router.delete("/students/id=:id", async (req, res) => {
  try {
    const deleteStudentByid = await student.findByIdAndDelete(req.params.id);
    if (!deleteStudentByid) {
      return res.status(404).send(`Not Found ${req.params.id}`);
    } else {
      res.status(200).send(deleteStudentByid)
      res.send("Delete Sucessfull")
    }
  } catch (error) {
    res.status(500).send(`Got Error: ${error}`);
  }

})



module.exports =router;
