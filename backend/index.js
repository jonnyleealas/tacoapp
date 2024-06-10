import express from "express"
import {configDotenv} from "dotenv"

const app =  express()

configDotenv()

app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT} `)
})