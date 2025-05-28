import Products from "../../../backend/models/Products";
import connectDB from "../../../backend/middleware.js/mongoose";

const handler = async (req, res)=>{
  if(req.method == "POST"){
  let product = await Products.find()
  let totalProducts = product.length
  let outOfStock = 0;
  let inStock = 0;
  for(let item of product){
  if(item.avalibleQty == 0){
    outOfStock += item.avalibleQty == 0
  }
  if(item.avalibleQty > 0){
    inStock += item.avalibleQty == item.avalibleQty
  }
  }
  res.status(200).json({ outOfStock, totalProducts, product, inStock} );
}
}
export default connectDB(handler)
 