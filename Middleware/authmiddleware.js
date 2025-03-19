const jwt = require('jsonwebtoken')

const authmiddleware = (req,res,next)=>{
    const authHeader=req.header("AUTHORIZATION")
    if(!authHeader) return res.status(401).json({message:"INVALID AUTHORIZATION"})
        const token = authHeader.split(" ")[1]
        if(!token) return res.status(401).json({message:"NO TOKEN PROVIDED"})
            try{
        const verified = jwt.verify(token,process.env.JWT_SECRET)
        req.user=verified
        next()
            }
            catch(err){
                return res.status(401).json({message:"INVALID TOKEN"})
            }
}
module.exports=authmiddleware

//authorization = bearer,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDdlZjk0MmFhOTQzNzE2NTM2NDIxMSIsImlhdCI6MTc0MjIwNDgyNn0.h7D3hB9QaGRNGjAzKYjOM0hYfgmeuKqu-NPHsUQ0V4I