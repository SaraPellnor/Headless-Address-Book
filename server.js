const express = require("express")
const { fstat } = require("fs")
const app = express()
const fs = require("fs")
app.use(express.json())

app.get("/api/getAll", (req,res) => {
    fs.readFile("address.json", (err,data) =>{
        if (err){res.status(404).json("Did not find...")}
        const addresses = JSON.parse(data)
        res.status(200).json(addresses)
        console.log("Alla produkter")
    })
})

app.post("/api/postAddress", (req,res) => {
    fs.readFile("address.json", (err,data) =>{
        if (err){res.status(404).json("Did not find...")}
        const addresses = JSON.parse(data)
        addresses.push(req.body)
        console.log(addresses);
        fs.writeFile("address.json", JSON.stringify(addresses, null, 2), (err) => {
            if (err) {
                res.status(404).json("How about no bitch?!")
            }
        })
        res.status(201).json(addresses)
        console.log("Post it!!!!!!!")
    })
})



app.listen(3000, () => {console.log("Server is up..")})