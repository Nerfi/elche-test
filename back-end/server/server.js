const express = require('express');
const cors = require('cors');
//requering the routes
const usersRoutes = require('../../back-end/routes/users');
const moviesRoutes =  require('../../back-end/routes/movies');

//connection to db
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//setting up DB connection
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongo db working and connected')
})



//declaring the routes and using them
app.use('/movies', moviesRoutes);
app.use('/users', usersRoutes);
app.use('/users/register', usersRoutes);

//listening app
app.listen(port, () => {
  console.log(`working as expected :) on port: ${port}`);
});
