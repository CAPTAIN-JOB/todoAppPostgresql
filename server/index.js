const express = require('express')
const app = express()
const cors = require('cors')

const pool = require("./database")



app.use(cors())
app.use(express.json())

//routes//
// Create a Todo
// Get all Todos
// Get a Todo
// Update a Todo
// Delete a Todo

app.listen(5000, () => {
	console.log("server has started on port 5000")
})



