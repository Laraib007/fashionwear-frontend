import Products from "../../../backend/models/Products";
import connectDB from "../../../backend/middleware.js/mongoose";

const handler = async (req, res)=>{
  let product = await Products.find()
  let tshirts = {}
  for(let item of product){
  
    if(item.title in tshirts){
        if(!tshirts[item.title].color.includes(item.color) && item.avalibleQty > 0){
          tshirts[item.title].color.push(item.color)
        }
        if(!tshirts[item.title].size.includes(item.size) && item.avalibleQty > 0){
          tshirts[item.title].size.push(item.size)
        }
    }
    else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if(item.avalibleQty > 0){
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }

    }
  }
  res.status(200).json({ tshirts } );
}
export default connectDB(handler)
 