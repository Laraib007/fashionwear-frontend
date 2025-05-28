import Orders from "../../../backend/models/Orders";
import connectDB from "../../../backend/middleware.js/mongoose";
import jwt from 'jsonwebtoken';
import Admin from "../../../backend/models/Admin";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        const token = req.body.token
         const data = jwt.verify(token,  process.env.NEXT_PUBLIC_SECRECT)
        let admin = await Admin.findOne({email: data.email})
        if(admin){
            let u = await Orders.find()
             let pendingOrd = 0;
             let compOrd = 0;
             let a;
             let b;
             for (let i in u) {
                if(u[i].status.includes("pending")){
                    pendingOrd += u[i].status.includes("pending")
                    a =  pendingOrd ;
                }
                if(u[i].status.includes("completed")){
                    compOrd += u[i].status.includes("completed")
                    b =  compOrd ;
                }
                     }
         res.status(200).json({u: u, a: a, b: b})
        }
        else{
            let orders = await Orders.find({email: data.email})
            res.status(200).json(orders)
        }
    } 
}
export default connectDB(handler)
