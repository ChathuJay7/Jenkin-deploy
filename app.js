const express = require("express");

const app = express()

app.get('/', (req,res) => {
    res.json({
        message: "Hello Backend Update..!"
    })
})

app.get('/home', (req,res) => {
    res.json({
        message: "Hello To Home Update...!"
    })
})

app.get('/dashboard', (req,res) => {
    res.json({
        message: "Welcome to dahsboard.."
    })
})

app.listen(3000)