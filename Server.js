const express=require('express');
const cors=require('cors');
const connectDB = require('./Config/db');
const router = require('./Routes/authRoutes');
const cartRouter = require('./Routes/cartRoutes');
const app= express();
app.use(cors())
app.use(express.json())
app.use("/auth",router)
app.use("/cart",cartRouter)
connectDB()
app.get('/',(req,res)=>{
    res.send("hello world")
})
const port=7000
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})