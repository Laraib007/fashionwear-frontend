import React, { useEffect, useState } from 'react'
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"
import { redirect, useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

const Checkout = ({cart, addToCart, clearCart, removeFromCart, subTotal}) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()
  const [altNumber, setAltNumber] = useState()
  const [city, setCity] = useState()
  const [nearBy, setNearBy] = useState()
  const [address, setAddress] = useState()
  const [id, setId] = useState()
  const [user, setUser] = useState()
  const { push } = useRouter()


  useEffect(() => {
    const user = localStorage.getItem("email")
    if(user){
      setEmail(user) 
      setUser(user)  
      getUserInfo()
           }
  }, [])

  const handleChange = (e)=> {
    if(e.target.name == "name"){
      setName(e.target.value)
          }
          
    else if(e.target.name == "email"){
      setEmail(e.target.value)
       }
       else if(e.target.name == "number"){
        setNumber(e.target.value)
        }
        else if(e.target.name == "altNumber"){
          setAltNumber(e.target.value)
          }
          else if(e.target.name == "address"){
            setAddress(e.target.value)
            }
            else if(e.target.name == "city"){
              setCity(e.target.value)
              }
              else if(e.target.name == "nearBy"){
                setNearBy(e.target.value)
                }
     }

const getUserInfo = async()=>{
  let token = localStorage.getItem("token")
    let data =  {token}
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if(response.status == "200"){
      setName(result.name)
      setEmail(result.email)
      setAddress(result.address)
      setNumber(result.cellNumber)
      setNearBy(result.nearby)
      setCity(result.city)
      
    }
}
     const onFormSubmit = async (e)=>{
if(name.length == 0 || address.length == 0 || nearBy.length == 0 || city.length == 0 || number.length == 0 || email.length == 0 ){
   toast.error("Please Provide your Complete Details", {
            position: "top-left",
        autoClose: 2400,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored"})
        return
}

      
    //  e.preventDefault()
    const idData = Date.now() 
    const id = idData * Math.round(Math.random() * 10)
     setId(()=> id)
    const d = new Date();
    let day = d.getDate();
    let days = d.getMonth()+1
    let dayss = d.getFullYear()
    let date = day.toString() + "-"+ days.toString() + "-" + dayss.toString()
       let data = {name, cart, email, number, altNumber, address, subTotal, id, date}
       let response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/order`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
         
       });
       let err = await response.json()
       if(response.status == "404"){
        toast.error(err.error, {
            position: "top-left",
        autoClose: 2400,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored"
            });
            
       }
       
       if(response.status == "403"){
        toast.error(err.error, {
            position: "top-left",
        autoClose: 2400,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored"
            });
            
       }
       if(response.status == "200"){
       localStorage.removeItem("cart")
       clearCart()
       push('/order?id='+ id)
      }
       }
       
  return (
    <div className='container mt-28'>
      <ToastContainer
position="top-left"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      <h1 className='m-1 text-2xl font-bold text-center'>CHECKOUT</h1>
      <h1 className='m-1 text-xl font-bold text-gray-700 text-center'>ENTER YOUR COMPELETE DETAILS AND ADDRESS</h1>
     <div className="mt-4 flex container justify-center ">
  
      <div className='w-96 m-1 '>
        <label for="name" className=" text-sm font-medium ml-1 text-gray-900">Full Name</label>
          <input onChange={handleChange} value={name} id="name" name="name" type="text" autocomplete="name" required className=" w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <div className='w-96 m-1 '>
        
          {user?<><label for="email" className=" text-sm font-medium ml-1 text-gray-900">Email Address <span>(Email cannot be edit)</span> </label><input value={email} id="email" name="email" type="email" autocomplete="email" required className=" cursor-not-allowed opacity-50 bg-gray-300 w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 readOnly" /> </>: <>  <label for="email" className=" text-sm font-medium ml-1 text-gray-900">Email Address </label> <input onChange={handleChange} value={email} id="email" name="email" type="email" autocomplete="email" required className=" w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /></>}
      </div>
      </div>
      <div className="mt-2 flex container justify-center ">
      <div className='w-96 m-1 '>
        <label for="number" className=" text-sm font-medium ml-1 text-gray-900">Cell No</label>
          <input onChange={handleChange} value={number} id="number" name="number" type="number" autocomplete="number" required className=" w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <div className='w-96 m-1 '>
        <label for="number" className=" text-sm font-medium ml-1 text-gray-900">Alt Cell No</label>
          <input onChange={handleChange} value={altNumber} id="altNumber" name="altNumber" type="number" autocomplete="altNumber" required className=" w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
     
      </div>
      <div className="mt-2 flex container justify-center ">
      <div className='w-96 m-1 '>
        <label for="city" className=" text-sm font-medium ml-1 text-gray-900">City</label>
          <input onChange={handleChange} value={city} id="city" name="city" type="text" autocomplete="city" required className=" w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <div className='w-96 m-1 '>
        <label for="nearBy" className=" text-sm font-medium ml-1 text-gray-900">Nearby Place</label>
          <input onChange={handleChange} value={nearBy} id="nearBy" name="nearBy" type="text" autocomplete="nearBy" required className=" w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      </div>
      <div className="mt-4 flex container justify-center ">
  
  <div className='w-2/3 '>
    <label for="address" className=" text-sm font-medium ml-1 text-gray-900">Address</label>
      <textarea onChange={handleChange} value={address} id="address" name="address" type="text" autocomplete="address" required className=" w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
  </div>
  {/* <-------CART ITEMS------> */}
  </div>
    <div className=' bg-pink-300 text-center sm:ml-0 md:ml-16 px-1'>
   <h1 className='text-lg text-center text-gray-800 font-bold m-2'>Review Your Cart Items</h1> 
    <ol className='font-semibold '>
      {Object.keys(cart).length == 0 && <div className='ml-8'>Your Cart is Empty!</div>}
      {Object.keys(cart).map((k)=>{return <li key={k}>
        <div className='justify-center  items-center flex '>
        <div className=' font-semibold mr-10'>{cart[k].name}({cart[k].size}/{cart[k].varient})</div>
        <div className='font-bold flex justify-center items-center  ml-10 '><FaMinusCircle onClick={()=>removeFromCart(k, 1, cart[k].name, cart[k].price, cart[k].size, cart[k].varient)} 
        
        className='text-pink-600 text-sd mx-1' />{cart[k].qty}<  FaPlusCircle className='text-pink-600 text-sd mx-1' onClick={()=>addToCart(k, cart[k].name, cart[k].price, 1, cart[k].size, cart[k].varient)} />
        </div>
        </div>
      </li>})}
    </ol>
    <div className=' text-center font-semibold my-2'>Sub Total: <span className='font-bold'> Rs.{subTotal}</span></div>
    </div>
    <div className='flex justify-center px-1'>
    
    <button onClick={onFormSubmit} type="submit" class="flex w-50 text-center  rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Confirm</button>
    
    </div>
  </div>
  
  )
}



export default Checkout