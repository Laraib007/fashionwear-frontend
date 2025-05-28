import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import mongoose from 'mongoose';
import Products from '../../../backend/models/Products';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import Error from 'next/error'
 
const Slugs = ({error, addToCart, buyNow, product, varient, price})=> {
const [pin, setPin] = useState()
const router = useRouter()
const [service, setService] = useState()
if(error == 404){
  return <Error statusCode={404} />
}
  const zipChecker = async()=>{
  const pins = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/zipCode`)
  const pinJson = await pins.json();
  if(pinJson.includes(Number(pin))){
    setService(true)
    toast("Yay we Deliver!");
    return
  } else {

    toast("we are sorry");
    setService(false)}
}
  const onChange = (e)=>{
    setPin(e.target.value)
  }
const [color, setColor] = useState(product.color)
const [size, setSize] = useState(product.size)

const productSlug =varient[color][size]["slug"]
const refreshVariants =(newsize, newcolor)=>{
  setSize(newsize)
  setColor(newcolor)
  // window.history.replaceState(null, "", ``${process.env.NEXT_PUBLIC_HOST_URL}/product/${varient[newcolor][newsize]["slug"]}`)

  let url = `${process.env.NEXT_PUBLIC_HOST_URL}/product/${varient[newcolor][newsize]["slug"]}`
  // window.location = url
  router.push(url)
}
  const src = product.img
  return <>

  <ToastContainer/>
  <section class="text-gray-600 body-font overflow-hidden">
  <div class="container  px-5 py-24 mx-auto">
    <div class="lg:w-4/5 md:mr-8 mx-auto flex flex-wrap">
    <Image alt="ecommerce" width={380} height={100} class=" border-2 object-cover object-center rounded " loader={() => src} src={src}></Image>
      {/* <img alt="ecommerce" class=" border-2 lg:w-1/2 w-full lg:h-auto h-74 object-cover object-center rounded " src="https://m.media-amazon.com/images/I/9112xNSIlqL._AC_SX522_.jpg" /> */}
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">FASHION WEARS</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} ({size}/{color})</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">{product.desc}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">Color</span>
            {Object.keys(varient).includes("white") && Object.keys(varient['white']).includes(size) && <button onClick={()=>{refreshVariants(size, "white")}} class={`border-2 border-gray-300 bg-white rounded-full w-6 h-6 focus:outline-none ${color === "white"? "border-gray-700": "border-gray-300"}`}></button>}
            {Object.keys(varient).includes("red") && Object.keys(varient['red']).includes(size) && <button onClick={()=>{refreshVariants(size, "red")}} class={`border-2 border-gray-300 bg-red-600 rounded-full w-6 h-6 focus:outline-none ${color === "red"? "border-gray-700": "border-gray-300"}`}></button>}
            {Object.keys(varient).includes("yellow") && Object.keys(varient['yellow']).includes(size) && <button onClick={()=>{refreshVariants(size, "yellow")}} class={`border-2 border-gray-300 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${color === "yellow"? "border-gray-700": "border-gray-300"}`}></button>}
            {Object.keys(varient).includes("purple") && Object.keys(varient['purple']).includes(size) && <button onClick={()=>{refreshVariants(size, "purple")}} class={`border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none ${color === "purple"? "border-gray-700": "border-gray-300"}`}></button>}
            {Object.keys(varient).includes("blue") && Object.keys(varient['blue']).includes(size) && <button onClick={()=>{refreshVariants(size, "blue")}} class={`border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${color === "blue"? "border-gray-700": "border-gray-300"}`}></button>}
            {Object.keys(varient).includes("green") && Object.keys(varient['green']).includes(size) && <button onClick={()=>{refreshVariants(size, "green")}} class={`border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${color === "green"? "border-gray-700": "border-gray-300"}`}></button>}
            {Object.keys(varient).includes("black") && Object.keys(varient['black']).includes(size) && <button onClick={()=>{refreshVariants(size, "black")}} class={`border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${color === "black"? "border-gray-500": ""}`}></button>}
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="">
              <select onChange={(e)=>{refreshVariants(e.target.value, color)}} value={size} class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
               {Object.keys(varient[color]).includes('S') && <option value={"S"}>S</option>}
               {Object.keys(varient[color]).includes('M') && <option value={"M"}>M</option>}
               {Object.keys(varient[color]).includes('L') && <option value={'L'}>L</option>}
               {Object.keys(varient[color]).includes('XL') && <option value={"XL"}>XL</option>}
               {Object.keys(varient[color]).includes('XXL') && <option value={"XXL"}>XXL</option>}
                
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div> 
        <div class="flex">
        {product.avalibleQty > 0 && <span class="title-font font-medium text-2xl text-gray-900">Rs.{product.price}</span>}
          {product.avalibleQty > 0? <button  onClick={()=>addToCart(productSlug, product.title, product.price, 1, size, color)} class="flex ml-3 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded"><FaCartShopping className='text-sd mt-1 mr-1 cursor-pointer text-white ' />Add to Cart</button>: <span class="title-font font-medium text-2xl text-gray-900">Out of Stock!</span>}
          {product.avalibleQty > 0 && <button onClick={()=> buyNow(productSlug, product.title, product.price, 1, size, color)} class="flex ml-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded"><IoBagCheck className='text-sd mt-1 mr-1 ' />Buy Now</button>}
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
        <div className='flex m-3 '>
        <input onChange={onChange} placeholder='Enter you Zipcode 12345' className='text-sm font-semibold border-2 rounded border-gray-400'></input>
        <button onClick={()=>{zipChecker()}} class="flex ml-2 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Check</button>
        </div>
        {!service && service != null && <h1 className='text-red-600 font-semibold'>Sorry! we can't deliver in your area</h1>}
         {service && service != null && <h1 className='text-green-600 font-semibold'>Yay! we can deliver this item in your state</h1>}
         
      </div>
    </div>
  </div>
</section>
  
  </>
}


export async function getServerSideProps(context) { 
let error = null;
    if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGOSSE_URI)
    }
    let product = await Products.findOne({ slug: context.query.slug })
    if(product == null){
      return {
        props: {error: 404},
      }
     }
    let varient =  await Products.find({title: product.title,  category: product.category})
    
    
    let colorSizeSlug = {}
    for(let item of varient){
      if(Object.keys(colorSizeSlug).includes(item.color)){
        colorSizeSlug[item.color][item.size] = {slug: item.slug}
      }
      else {
        colorSizeSlug[item.color] = {}
        colorSizeSlug[item.color][item.size] = {slug: item.slug}
      }
    }

    return {
      props: {error: error, product: JSON.parse(JSON.stringify(product)), varient: JSON.parse(JSON.stringify(colorSizeSlug))},
    }
  }




export default Slugs