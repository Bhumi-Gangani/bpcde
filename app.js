const express = require("express")
const cors = require('cors');
require("./db/conn")

const userRoute =require("./router/userRoute")

const app = express()
const port = process.env.PORT || 8000

app.use(cors());
app.use(express.json())

//Router
app.use(userRoute)

app.get("/", (req, res) => {
   res.send("Home")
})

app.listen(port, () => {
   console.log("Server is running on port " + port);
})
