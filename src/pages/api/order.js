import Orders from "../../../backend/models/Orders";
import Products from '../../../backend/models/Products';
import connectDB from "../../../backend/middleware.js/mongoose";

const handler = async (req, res)=>{
   
    if(req.method == "POST"){
        try {
            let product, sumTotal=0
            let cart = req.body.cart
            for(let item in cart){
                    sumTotal += cart[item].price * cart[item].qty
                
            product = await Products.findOne({slug: item})
            if(product.avalibleQty < cart[item].qty){
                return res.status(403).json({"error":product.title + " (" + product.size  + "/" + product.color + ")" + " is out of stock. Please Try Again! Please reduce quantity or remove the product"})
            }
            if(product.price !== cart[item].price){ 
                res.status(404).json({"error": "Sorry!, Some Item of Your Cart is changed. Please Try Again!"})
                return
                    }                    
      }
      if(sumTotal !== req.body.subTotal){
        res.status(404).json({"error": "Sorry!, Some Item of Your Cart is changed. Please Try Again"})
        return
    }
            let o = new Orders({
                name: req.body.name,
                product: req.body.cart,
                email: req.body.email,
                number: req.body.number,
                altNumber: req.body.altNumber,
                address: req.body.address,
                amount: req.body.subTotal,
                id:  req.body.id,
                date:  req.body.date
                })
                await o.save()
            res.status(200).json({ sucess: "sucess" });

            let order = await Orders.findOne({id: req.body.id})
            let products = order.product
            for(let slug in cart){
                 await Products.findOneAndUpdate({slug: slug}, { $inc:{"avalibleQty": - products[slug].qty}})
            }
        } catch (error) {
            res.status(404).json({ warning: "Product not added" })
        }
    }
          
     
    } 
  
export default connectDB(handler)
