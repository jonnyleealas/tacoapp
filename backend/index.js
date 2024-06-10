import express from "express"
import {configDotenv} from "dotenv"

const app =  express()

configDotenv()

app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
})

app.post('/', (req, res) => {
    res.send('post to home')
})

app.delete('/delete', (req, res) => {
    res.send("delete")
})

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT} `)
})