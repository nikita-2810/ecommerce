const express=require('express');
const cors=require('cors');
const connectDB = require('./Config/db');
const router = require('./Routes/authRoutes');
const cartRouter = require('./Routes/cartRoutes');
const app= express();

const allowedOrigins=["ecommerce-frontend-gamma-pearl.vercel.app"]

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies and authentication headers if needed
  }))
app.use(express.json())
app.use("/auth",router)
app.use("/cart",cartRouter)
connectDB()
app.get('/',(req,res)=>{
    res.send("hello world")
})
const port=3000
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})