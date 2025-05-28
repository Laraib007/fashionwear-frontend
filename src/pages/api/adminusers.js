import connectDB from "../../../backend/middleware.js/mongoose";
import Users from "../../../backend/models/Users";

const handler = async (req, res)=>{
  if(req.method == "POST"){
  let users = await Users.find()
   res.status(200).json({ users } );
}
}
export default connectDB(handler)
 