const express = require("express");

const noteModel = require('./models/note.model');

const app = express();
app.use(express.json());




module.exports = app;