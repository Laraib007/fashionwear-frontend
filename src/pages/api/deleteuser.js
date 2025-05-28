import connectDB from "../../../backend/middleware.js/mongoose";
import Users from "../../../backend/models/Users";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        const token = req.body.token
        let o = await Users.findOneAndDelete({_id: token})
       
        res.status(200).json({ "sucess": "User Delete Successfully" });
    } else {
        res.status(400).json({err: "bad request"})
    }
  
}
export default connectDB(handler)