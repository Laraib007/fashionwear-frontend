import connectDB from "../../../backend/middleware.js/mongoose";
import Orders from "../../../backend/models/Orders";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        const token = req.body.token
        let o = await Orders.findOneAndUpdate({id: token}, {status: "completed"})
       await o.save()
       
        res.status(200).json({ "sucess": "sucess" });
    } else {
        res.status(400).json({err: "bad request"})
    }
  
}
export default connectDB(handler)