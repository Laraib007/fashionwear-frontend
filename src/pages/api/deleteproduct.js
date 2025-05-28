import connectDB from "../../../backend/middleware.js/mongoose";
import Products from "../../../backend/models/Products";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        const token = req.body.token
        let p = await Products.findByIdAndDelete({_id: token})
       
        res.status(200).json({ "sucess": "sucess" });
    } else {
        res.status(400).json({err: "bad request"})
    }
  
}
export default connectDB(handler)