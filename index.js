const express = require('express')
const mongoose = require('mongoose');
const authRouter = require('./router');

const PORT = process.env.PORT || 3000
const SETTINGS = 'mongodb+srv://qwerty:123@cluster0.ndusm.mongodb.net/authExpress?retryWrites=true&w=majority';


const app = express();
app.use(express.json());

 const start = async () => {
  try {
    await mongoose.connect(SETTINGS);

    app.listen(PORT, () => {
      console.log('server listening on port'+ PORT)
    })

  } catch (e) {
    console.log(e);
  }
};

start();