import Users from "../../../backend/models/Users";
import connectDB from "../../../backend/middleware.js/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res)=>{
    if(req.method == "POST"){
        let token = req.body.token
        
         let user = jwt.verify(token, process.env.NEXT_PUBLIC_SECRECT);
         
                let u = await Users.findOne({email: user.email})
                let {name, email, city, address, nearby, cellNumber} = u
             if(u){
               res.status(200).json({ sucess: "sucess", name, email, city, address, nearby, cellNumber});
             } 
            
    
        } else {
            res.status(404).json({ warning: "Invalid Request" })
        }     
          
        
    } 
  
export default connectDB(handler)
