import Products from "../../../backend/models/Products";
import connectDB from "../../../backend/middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        
        for (let i = 0; i < req.body.length; i++) {
            let slug = req.body[i].title + Math.round(Math.random() * 53475237)
        let p = new Products({
           
                title:  req.body[i].title,
                slug:  slug,
                desc:  req.body[i].desc,
                img:   req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price:   req.body[i].price,
                avalibleQty:  req.body[i].avalibleQty,        
        })
       await p.save()
       
    }
        res.status(200).json({ "sucess": "sucess" });
    } else {
        res.status(400).json({err: "bad request"})
    }
  
}
export default connectDB(handler)