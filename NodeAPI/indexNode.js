const fs = require("fs").promises
const express = require("express")
const cors = require("cors")
const _ = require("lodash")
const { v4:uuid } = require("uuid")

//Set up the API server

const app = express()
app.use(express.json())

app.get("/outfit", (req, res) => {
    const tops = ["Black", "Blue", "Navy", "Yellow"]
    const jeans = ["Green", "Cyam", "Violet", "Rainbow"]
    const shoes = ["Cyan", "Gray", "Sky blue", "Black"]
    res.json({
        top: _.sample(tops),
        jeans: _.sample(jeans),
        shoes: _.sample(shoes)
    })
} )

app.post("/comments", (req, res) => {
    const id = uuid();
    const comment = req.body.comment
    if(!content) {
        return res.sendStatus(400);
    }
    // console.log(comme  nt)
    res.sendStatus(201)
})

app.listen(3000, () => console.log('The server is running....'));