const express = require("express");

const app = express()

app.get('/', (req,res) => {
    res.json({
        message: "Hello Backend..!"
    })
})

app.get('/home', (req,res) => {
    res.json({
        message: "Hello to Home...!"
    })
})

app.listen(3000)