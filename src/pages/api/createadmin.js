import connectDB from "../../../backend/middleware.js/mongoose";
import Admin from "../../../backend/models/Admin";
var CryptoJS = require("crypto-js");

const handler = async (req, res)=>{
    if(req.method == "POST"){
        try {
            let u = new Admin({
                name: req.body.name,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password,  process.env.NEXT_PUBLIC_SECRECT).toString()
                })
                await u.save()
            res.status(200).json({ sucess: "sucess" });
    
        } catch (error) {
            res.status(404).json({ warning: "Email Already Exists" })
        }
       
    }
          
        
    } 
  
export default connectDB(handler)
