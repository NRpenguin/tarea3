const express= require("express")
const fs = require("fs")

const app = express()
const usuarios= require("./productos")
const port = process.env.PORT || 8080 

let array=
[
    {
        nombre:"Carlos",
        edad:"36",
        id:1
    },

    {
        nombre:"Juan",
        edad:"23",
        id:2
    },

    {
        nombre:"Luna",
        edad:"24",
        id:3
    },

    {
        nombre:"Carla",
        edad:"19",
        id:4
    }
]

app.listen(port, ()=>{
    fs.writeFileSync("./tarea.txt", JSON.stringify(array), "utf-8")
})


//Elegir RUTA
app.get("/productos", (req, res) => {
    res.send(usuarios)
})  


app.get("/productoRandom", (req, res)=>{
    let random = usuarios[Math.floor(Math.random() * usuarios.length)]
    res.send(random)
})