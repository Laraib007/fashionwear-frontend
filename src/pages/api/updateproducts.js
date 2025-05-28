import Products from "../../../backend/models/Products";
import connectDB from "../../../backend/middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
         let _id = req.body.productId
        let title = req.body.title
         let avlQty = req.body.avlQty
         let price = req.body.price

        let p = await Products.findByIdAndUpdate(_id, {title, "avalibleQty": avlQty, price})
       await p.save()
       
        res.status(200).json({ "sucess": "Product Update Sucessfully" });
    } else {
        res.status(400).json({err: "bad request"})
    }
  
}
export default connectDB(handler)