const express = require("express");

const noteModel = require('./models/note.model');

const app = express();
app.use(express.json());

app.post('/notes', async (req, res)=>{
  const data = req.body;

  await noteModel.create({
    title: data.title,
    description: data.description
  });

  res.status(201).json({
    message: "Notes created successfully",
  })
});

app.get('/notes', async (req, res)=>{
  const notes = await noteModel.find();

  res.status(201).json({
    message: "notes fetched successfully",
    notes
  })
});

app.delete('/notes/:id', async (req, res)=>{
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id
  });

  res.status(201).json({
    message: "Note deleted successfully"
  })
});

app.patch('/notes/:id', async (req, res)=>{
  const id = req.params.id;

  if(req.body.description !== undefined){
    await userModel.findOneAndUpdate({ _id:id }, { description: req.body.description });
  }
  if(req.body.title !== undefined){
    await userModel.findOneAndUpdate({ _id:id }, { title: req.body.title });
  }

  res.status(201).json({
    message: "Notes updated successfully"
  })
});

module.exports = app;