import express from "express"
import { config } from "dotenv"
config({path: "./.env"})
import { connectDB } from "./db.js"

const app = express()

connectDB()
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(4000,"0.0.0.0", () => {
  console.log('Server started on port 4000');
});