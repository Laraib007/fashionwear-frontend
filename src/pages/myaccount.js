import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
var jwt = require('jsonwebtoken');

const Myaccount = () => {
    const [hidden, setHidden] = useState(false)
    const [hiddenPass, setHiddenpass] = useState(false)
      const [name, setName] = useState()
      const [email, setEmail] = useState()
      const [city, setCity] = useState()
      const [cellNumber, setNumber] = useState()
      const [nearby, setNearBy] = useState()
      const [address, setAddress] = useState()
      const [user, setUser] = useState()
      const [ppass, setPpass] = useState()
      const [password, setPass] = useState()
      const [cpass, setCpass] = useState()
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
              
        else if(e.target.name == "city"){
          setCity(e.target.value)
           }
           else if(e.target.name == "number"){
            setNumber(e.target.value)
            }
            else if(e.target.name == "nearby"){
              setNearBy(e.target.value)
              }
              else if(e.target.name == "address"){
                setAddress(e.target.value)
                }
                else if(e.target.name == "ppass"){
                setPpass(e.target.value)
                }
                else if(e.target.name == "password"){
                setPass(e.target.value)
                }
                else if(e.target.name == "cpass"){
                setCpass(e.target.value)
                }
         }

         const getUserInfo = async (e)=>{
          // e.preventDefault()
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
const updateUser = async (e)=>{
  e.preventDefault()
  let token = localStorage.getItem("token")
    let data =  {token, name, email, city, address, nearby, cellNumber}
    setHidden(false)
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/updateuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if(response.status == "200"){
      console.log(result)
      toast.success(result.sucess, {
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
  }

  const updatePass = async (event)=>{
    event.preventDefault()
    if(password !== cpass){
      toast.error("Password and Confirm Password not Matched", {
          position: "top-left",
      autoClose: 2400,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored"
          });
          return
    }
    if(localStorage.getItem("token")){
  let data = {email, password, ppass}
  let response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/updatepassword`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result)
  if(result.sucess){
    toast.success("Password Updated Sucessfully", {
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
   toast.error("Invalid Creditionals", {
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
  }
  return (
    <div><section class="bg-white py-8 antialiased  md:py-8">
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
    <div class="mx-auto max-w-screen-lg px-4 2xl:px-0">
      
      <h2 class="mb-4 text-xl font-semibold text-gray-900  sm:text-2xl md:mb-6">Account Overview</h2>
      <div class="  border-b border-t border-gray-200  dark:border-gray-700   ">
        </div>
      <div class="py-4 md:py-8">
        <div class="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
          <div class="space-y-4">
            <div class="flex space-x-4">
              <img class="h-16 w-29 rounded-lg" src="https://cdn-icons-png.freepik.com/512/12124/12124771.png?ga=GA1.1.947249077.1739984762" alt="Helene avatar" />
              <div>
                <h2 class="mt-2 flex items-center text-xl font-bold leading-none text-gray-900  sm:text-2xl">{name} </h2>
              </div>
            </div>
            <dl class="">
              <dt class="font-semibold text-gray-900 ">Email Address <span>(Can't be change)</span></dt>
              <dd class="text-gray-500 dark:text-gray-400">{email}</dd>
            </dl>
            
            <dl>
              <dt class="font-semibold text-gray-900 ">Delivery Address</dt>
              <dd class="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <svg class="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
                {address}
              </dd>
            </dl>
          </div>
          <div class="space-y-4">
            <dl>
              <dt class="font-semibold text-gray-900 ">Phone Number</dt>
              <dd class="text-gray-500 dark:text-gray-400">{cellNumber}</dd>
            </dl>
            <dl>
              <dt class="font-semibold text-gray-900 ">Nearby point</dt>
              <dd class="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <svg class="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                  />
                </svg>
                {nearby}
              </dd>
            </dl>
            <dl>
              <dt class="font-semibold text-gray-900 ">City</dt>
              <dd class="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <svg class="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                  />
                </svg>
                {city}
              </dd>
            </dl>
          
          </div>
        </div>
        
        <button  onClick={()=>setHidden(true) } type="button" data-modal-target="accountInformationModal2" data-modal-toggle="accountInformationModal2" class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 bg-blue-600 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto">
          <svg class="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path>
          </svg>
          Update Your Info
        </button>
          <button  onClick={()=>setHiddenpass(true) } type="button" data-modal-target="accountInformationModal2" data-modal-toggle="accountInformationModal2" class=" ml-4 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 bg-blue-600 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto">
          <svg class="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path>
          </svg>
          Update Password
        </button>
      </div>
      
    </div>
    {/* <!-- Account Information Modal --> */}
    <div className='justify-center center'>
   {hidden && <div id="accountInformationModal2" tabIndex="-1" aria-hidden="false" class="max-h-auto fixed left-0 right-0 top-0 z-50  h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
      <div class="max-h-auto my-auto mx-auto relative max-h-full w-full max-w-lg p-4">
        {/* <!-- Modal content --> */}
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
          {/* <!-- Modal header --> */}
          <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
            <h3 class="text-lg font-semibold text-white ">Account Information</h3>
            <button onClick={()=>setHidden(false)} type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="accountInformationModal2">
              <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form class="p-4 md:p-5">
            <div class="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
             
  
              <div class="col-span-2 ">
                <label for="full_name_info_modal" class="mb-2 block text-sm font-medium text-white "> Your Full Name* </label>
                <input onChange={handleChange} value={name} name='name' type="text" id="full_name_info_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your first name" required />
                <div class="col-span-2 sm:col-span-1">
                <div class="mb-2 flex items-center gap-2">
                  <label for="select_city_input_billing_modal" class="block text-sm font-medium text-white "> City* </label>
                </div>
                <input onChange={handleChange} value={city} name='city' type="text" id="phone-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="City" />
              </div>
              </div>
              <div class="col-span-2">
                <label for="pick-up-point-input" class="mb-2 block text-sm font-medium text-white "> Nearby point* </label>
                <input onChange={handleChange} value={nearby} name='nearby' type="text" id="pick-up-point-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter the pick-up point name" required />
              </div>
              
              <div class="col-span-2">
                <label for="phone-input_billing_modal" class="mb-2 block text-sm font-medium text-white "> Phone Number* </label>
                <div class="flex items-center">
                
                 
                  <div class="relative w-full">
                    <input onChange={handleChange} value={cellNumber} name='number' type="cellNumber" id="phone-input" class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500" placeholder="123-456-7890" required />
                  </div>
                </div>
              </div>
  
              <div class="col-span-2">
                <label for="address_billing_modal" class="mb-2 block text-sm font-medium text-white "> Delivery Address* </label>
                <textarea onChange={handleChange} value={address} name='address' id="address_billing_modal" rows="4" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter here your address"></textarea>
              </div>
            </div>
            <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
              <button onClick={updateUser} type="submit" class="me-2 inline-flex items-center rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save information</button>
              <button onClick={()=>setHidden(false)} type="button" data-modal-toggle="accountInformationModal2" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    }
  {hiddenPass && <div id="accountInformationModal2" tabIndex="-1" aria-hidden="false" class="max-h-auto fixed left-0 right-0 top-0 z-50  h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
      <div class="max-h-auto my-auto mx-auto relative max-h-full w-full max-w-lg p-4">
        {/* <!-- Modal content --> */}
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
          {/* <!-- Modal header --> */}
          <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
            <h3 class="text-lg font-semibold text-white ">Password Update</h3>
            <button onClick={()=>setHiddenpass(false)} type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="accountInformationModal2">
              <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form class="p-4 md:p-5">
            <div class="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
             
  
              <div class="col-span-2 ">
                <label for="full_name_info_modal" class="mb-2 block text-sm font-medium text-white "> Your Previous Password* </label>
                <input onChange={handleChange} value={ppass} name='ppass' type="password" id="full_name_info_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your first name" required />
                <div class="col-span-2 sm:col-span-1">
                <div class="mb-2 flex items-center gap-2">
                  <label for="select_city_input_billing_modal" class="block text-sm font-medium text-white "> New Password* </label>
                </div>
                <input onChange={handleChange} value={password} name='password' type="password" id="password" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="New Password" />
              </div>
              </div>
              <div class="col-span-2">
                <label for="pick-up-point-input" class="mb-2 block text-sm font-medium text-white ">Confirm Password* </label>
                <input onChange={handleChange} value={cpass} name='cpass' type="password" id="cpass" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Confirm Password" required />
              </div>
              
              <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
              <button onClick={updatePass} type="submit" class="me-2 inline-flex items-center rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update Password</button>
              <button onClick={()=>setHiddenpass(false)} type="button" data-modal-toggle="accountInformationModal2" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
            </div>
                </div>
                
                
                </form>
                </div>
                </div>
                </div>}
   
      </div>
  </section>
  </div>
  )
}

export default Myaccount