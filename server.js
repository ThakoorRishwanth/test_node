const express = require('express')
require('dotenv').config()
const app = express();

const port = process.env.PORT || 7171

app.use(express.json())

app.get('/',(req, res)=>{
    res.send('This is the Home Route')
})

app.listen(port,()=>{
    console.log(`Server is Running at the port ${port}`)
})