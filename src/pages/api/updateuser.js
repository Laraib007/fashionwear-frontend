import Users from "../../../backend/models/Users";
import connectDB from "../../../backend/middleware.js/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res)=>{
    if(req.method == "POST"){
        let token = req.body.token
        let name = req.body.name
         let city = req.body.city
         let address = req.body.address
         let nearby = req.body.nearby
         let cellNumber =  req.body.cellNumber
         let user = jwt.verify(token, process.env.NEXT_PUBLIC_SECRECT);
                let u = await Users.findOneAndUpdate({email: user.email}, {name, city, address, nearby, cellNumber})
                
             if(u){
              let t = res.status(200).json({ sucess: "Profile Update Sucessfully"}, {name, city, address, nearby, cellNumber});
             } 
            
             
        } else {
            res.status(404).json({ warning: "Invalid Request" })
        }     
          
        
    } 
  
export default connectDB(handler)
