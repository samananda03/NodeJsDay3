const express = require('express')
const app = express();
require('dotenv').config();
const { connectDB } = require('./config/dbMySql')
const productRoutes = require('./routes/productRoutes')

connectDB();

app.get('/',(req,res)=>{
    res.status(200).send("API is running fine now")
})

app.use(express. urlencoded({extended: true}))
app.use(express.json())

app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 2000
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT} `);
})