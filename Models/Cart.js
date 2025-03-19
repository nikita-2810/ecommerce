const mongoose=require('mongoose')
const CartSchema=mongoose.Schema({
    userId:String,
    items:[
        {
            productId:String,
            quantity:Number,
            name:String,
            price:String
        }
    ]
})
module.exports=mongoose.model('Cart',CartSchema)