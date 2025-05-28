import Link from 'next/link'
import React from 'react'
import mongoose from "mongoose";
import Products from '../../backend/models/Products';
import { useRouter } from 'next/router';

const Tshirt = ({products}) => {
  const router = useRouter()
  return (
    <div>

    <section className="text-gray-600 body-font">
        <div className="flex py-14 flex-col text-center w-full">
            
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome to Our Ecommerce Store</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
        <div  className="container px-5 py-7 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
                
            {Object.keys(products).map((items)=>{ return    <div key={products[items].slug} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md m-4  ">
                    <a onClick={()=>router.push(`/product/${products[items].slug}`) } className=" relative rounded overflow-hidden contents">
                      
          <img alt="ecommerce" className="object-cover object-center w-72 h-72 block " src={products[items].img}/>
                    </a> 
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[items].title}</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{products[items].title}</h2>
                        <p className="mt-1">Rs.{products[items].price}</p>
                    </div>
                    <Link href={`/product/${products[items].slug}`}>Buy Now</Link>
                    <div className=''>
                        {products[items].size.includes("S") && <span className='border border-s-gray-300 px-1'>S</span>}
                        {products[items].size.includes("M") && <span className='border border-s-gray-300 px-1 ml-1'>M</span>}
                        {products[items].size.includes("L") && <span className='border border-s-gray-300 px-1 ml-1'>L</span>}
                        {products[items].size.includes("XL") && <span className='border border-s-gray-300 px-1 ml-1'>XL</span>}
                        {products[items].size.includes("XXL") && <span className='border border-s-gray-300 px-1 ml-1'>XXL</span>}
                    </div>
                    <div>
                    {products[items].color.includes("green") && <button class="border-2 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[items].color.includes("yellow") && <button class="border-2 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[items].color.includes("purple") && <button class="border-2 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[items].color.includes("blue") && <button class="border-2 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[items].color.includes("red") && <button class="border-2 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}

                    {products[items].color.includes("black") && <button class="border-2 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}

                    </div>
                </div>
                })}
                
              
                </div>
            </div>
    </section>
</div>
  )
}
export async function getServerSideProps(products) {

    if(!mongoose.connections[0].readyState){
    mongoose.connect(process.env.MONGOSSE_URI)
    }
    let product = await Products.find({category: "tshirt"})
   
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
      if(item.avalibleQty >= 0){
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }

    }
  }
    return {
      props: {products: JSON.parse(JSON.stringify(tshirts))},
    }
  }

export default Tshirt