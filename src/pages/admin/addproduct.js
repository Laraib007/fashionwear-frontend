import React, { useState } from 'react'
import Sidebar from './sideBar'
import cloudinary from '../../../backend/middleware.js/cloudinary'
const AddProduct = () => {
  const [img, setImage] = useState('')
  const [size, setSize] = useState()
  const [category, setCat] = useState()
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [price, setPrice] = useState()
  const [avalibleQty, setAvlQty] = useState()
  const [color, setColor] = useState()


  const handleChange = async(e)=>{
 const file = e.target.files[0]
 if(!file) return

 const data = new FormData()

data.append("file", file)
data.append("upload_preset", "FashionWear")
data.append("cloud_name", "dspvvrcfp")
 const res = await fetch("https://api.cloudinary.com/v1_1/dspvvrcfp/image/upload",{
  method: "POST",
  body: data
 })
const uploadedImg = await res.json()
 setImage(uploadedImg.url)
//  console.log(uploadedImg.url)
}
const handleChangeDetail = (e)=> {
if(e.target.name == "title"){
setTitle(e.target.value)

}
else if(e.target.name == "desc"){
  setDesc(e.target.value)
  
  }

  else if(e.target.name == "price"){
    setPrice(e.target.value)
    
    }
 else if(e.target.name == "avalibleQty"){
    setAvlQty(e.target.value)
    
    }
     else if(e.target.name == "color"){
    setColor(e.target.value)
    
    }
     else if(e.target.name == "size"){
    setSize(e.target.value)
    
    }
     else if(e.target.name == "category"){
    setCat(e.target.value)
    
    }
  }

const onSubmit = async (e) =>{
  e.preventDefault()
  let data = [{title, desc, img, category, size, color, price, avalibleQty}]
  let response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/addproducts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
}
const refreshVariants =(newsize, newcat)=>{
  setSize(newsize)
  setCat(newcat)
}
  return (
    <div className='text-gray-200 min-h-screen  ml-56 bg-gray-900 body-font'>
      <Sidebar/>
      <h1 style={{marginTop: "-4%"}} class="  text-3xl font-bold title-font  mb-2  text-center">ADMIN DASHBOARD</h1>
<form class="max-w-md mx-auto mt-16 p-4 text-gray-400 bg-gray-900 body-font">
  <div class="relative z-0 w-full mb-5 group">
      <input onChange={handleChangeDetail} type="text" value={title} name="title" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Title</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <textarea onChange={handleChangeDetail} value={desc} type="text" name="desc" id="desc" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Description</label>
  </div>

  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-2 group">
        <input onChange={handleChangeDetail} value={price} type="number" name="price" id="price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
    </div>
    <div class="relative z-0 w-full mb-2 group">
        <input onChange={handleChangeDetail} value={avalibleQty} type="number" name="avalibleQty" id="avalibleQty" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="avalibleQty" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available Quantity</label>
    </div>
  </div>
  <div class="flex mb-2 items-center">
  <div class="relative z-0  w-2/3 mb-2 group">
        <input onChange={handleChangeDetail} value={color} type="text" name="color" id="color" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="color" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Color (stay blank if no color)</label>
    </div>
            <span class="ml-6 mr-3 ">Size</span>
            <div class="">
              <select  onChange={(e)=>refreshVariants(e.target.value, category)} name='size' id='size' value={size} class="rounded bg-gray-900 border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
              <option value={"-"}>No Size</option>
               <option value={"S"}>S</option>
               <option value={"M"}>M</option>
                <option value={'L'}>L</option>
                 <option value={"XL"}>XL</option>
                <option value={"XXL"}>XXL</option>
                
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            </div>
            <div className='column'>
            <span class=" mt-0 mr-3 ">Category</span>
            <div class="">
              <select  onChange={(e)=>refreshVariants(e.target.value, size)} name='category' id='category' value={category} class="rounded mt-1 bg-gray-900 border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
               <option value={"nosize"}>No Size</option>
               <option value={"mugs"}>mugs</option>
               <option value={"stickers"}>stickers</option>
                <option value={'hoodies'}>hoodies</option>
                 <option value={"tshirt"}>tshirt</option>
                
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            
<label class="block mt-2 mb-1 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input onChange={handleChange} name='file' class="block w-full text-sm text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file" type="file"/>
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
</div>
  <button onClick={onSubmit} type="submit" class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
</form>

    </div>
  )
}

export default AddProduct
