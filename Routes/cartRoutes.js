const express = require('express')
const { addToCart, getCart, removeFromCart } = require('../Controllers/cartControllers')
const authmiddleware=require('../Middleware/authmiddleware')
const CartRouter=express.Router()
CartRouter.post("/add",authmiddleware,addToCart)
CartRouter.get("/",authmiddleware,getCart)
CartRouter.post("/remove",authmiddleware,removeFromCart)
module.exports=CartRouter