const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const UserModel = require('../backend/user')
const { MongoClient } = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017", { useUnifiedTopology: true });
const app = express ()
app.use (cors( ))
app.use(express.json( ))

mongoose.connect("mongodb://localhost:27017/ecomm")


app.get('/userdata', async (req, res) => {
    try {
      const data = await UserModel.find({}); // Retrieve all documents from the collection
      res.json(data);
    } catch (error) {
      console.error('Error fetching data from MongoDB', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  app.post('/userdata', async (req, res) => {
    try {
      const { name, email,password } = req.body;
      const newData = new UserModel({ name, email,password });
      await newData.save();
      res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(3050,()=>{
    console.log('server is running');
})