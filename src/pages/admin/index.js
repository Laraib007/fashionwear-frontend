import Sidebar from './sideBar'
import React, { useEffect, useRef, useState } from 'react'
import Router from 'next/router';
import Link from 'next/link'
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { VscGoToSearch } from "react-icons/vsc";
import { ToastContainer, toast } from 'react-toastify';

const index = () => {
    
    const [order, setOrder] = useState([])
    const [pendingOrders, setPendingOrders] = useState(0)
    const [completedOrders, setCompletedOrders] = useState(0)
    const [editOrd, setEditOrd] = useState(false)
    const [orderId, setOrderId] = useState()
    const [deleteOrd, setDeleteOrd] = useState(false)

const ref = useRef()
    const toggleDelete =(params) =>{
        setOrderId(params)
        setEditOrd(!editOrd)
    }
    const toggleDeleteOrd =(params) =>{
        setOrderId(params)
        setDeleteOrd(!deleteOrd)
    }

    const confirmOrder = async ( e)=>{
        //   e.preventDefault()
          let token = orderId
            let data =  {token}
            
            let response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/updateorder`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
            const result = await response.json();
        console.log(result)
        setEditOrd(!editOrd)
        if(result.sucess){
          toast.success('Order Status Updated Sucessfully', {
            position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored"
            });
            // setTimeout(() => {
            //       router.push("`${process.env.NEXT_PUBLIC_HOST_URL}/admin")
            //     }, 1500);
              } else { toast.error('Some Error Occurred ', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });}
            }
            const deleteOrder = async ( e)=>{
        //   e.preventDefault()
          let token = orderId
            let data =  {token}
            
            let response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/deleteorder`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log(result)
        setDeleteOrd(false)
        if(result.sucess){
          toast.success('Order Deleted Sucessfully', {
            position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored"
            });
            // setTimeout(() => {
            //       router.push("`${process.env.NEXT_PUBLIC_HOST_URL}/admin")
            //     }, 1500);
              } else { toast.error('Some Error Occurred ', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });}
            }
      useEffect(() => {
        
      const orderFetch = async ()=>{
        let response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({token: localStorage.getItem('admintoken')}),
        });
      
        const result = await response.json();
        setOrder(result.u)
        setPendingOrders(result.a)
        setCompletedOrders(result.b)
        console.log(result)
        }
      
        if(!localStorage.getItem('admintoken')){
          Router.push('/')
        }
        else{
          orderFetch()
        }
      }, [editOrd, deleteOrd])
      
     
  return (
    <>
     <ToastContainer
    position="top-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss={false}
    draggable
    pauseOnHover={false}
    theme="colored"
    />
    <Sidebar/>

    <h1 style={{marginTop: "-4%"}} class=" ml-56 text-3xl font-bold title-font text-black mb-2  text-center">ADMIN DASHBOARD</h1>
    <div class="p-4 sm:ml-64">
       <div class="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
       <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-4 mx-auto">
    
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3 w-full">
        <div class="h-full bg-gray-800 text-center bg-opacity-40 p-8 rounded">
         
         <h2 class="title-font font-bold text-2xl text-white">Total Orders</h2>
          <a class="inline-flex items-center">
          
            <span class="flex-grow flex flex-col pl-4">
              <span class="inline-flex items-center justify-center w-24 h-24 mr-8 m-4 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 text-xl dark:text-blue-100">{order.length}</span>
            </span>
          </a>
          <h3>--FaishonWears--</h3>
        </div>
      </div>
      <div class="p-4 md:w-1/3 w-full">
        <div class="h-full bg-gray-800 text-center bg-opacity-40 p-8 rounded">
         
         <h2 class="title-font font-bold text-2xl text-white">Pending Orders</h2>
          <a class="inline-flex items-center">
          
            <span class="flex-grow flex flex-col pl-4">
              <span class="inline-flex items-center justify-center w-24 h-24 mr-8 m-4 p-3 ms-3 text-sm font-medium text-red-800 bg-red-100 rounded-full dark:bg-red-900 text-xl dark:text-red-100">{pendingOrders}</span>
            </span>
          </a>
          <h3>--FaishonWears--</h3>
        </div>
      </div>
      <div class="p-4 md:w-1/3 w-full">
        <div class="h-full bg-gray-800 text-center bg-opacity-40 p-8 rounded">
         
         <h2 class="title-font font-bold text-2xl text-white">Completed Orders</h2>
          <a class="inline-flex items-center">
          
            <span class="flex-grow flex flex-col pl-4">
              <span class="inline-flex items-center justify-center w-24 h-24 mr-8 m-4 p-3 ms-3 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900 text-xl dark:text-green-100">{completedOrders}</span>
            </span>
          </a>
          <h3>--FaishonWears--</h3>
        </div>
      </div>
    </div>
  </div>
</section><section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        {/* <!-- Start coding here --> */}
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">Search Product ID</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search Order ID" required=""/>
                        </div>
                    </form>
                </div>
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                      
                        <div id="actionsDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                            </div>
                        </div>
                        <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                            </svg>
                            Filter
                            <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </button>
                        <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                            <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                            <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                <li class="flex items-center">
                                    <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="fitbit" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="razor" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="nikon" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="nikon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="benq" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">User name</th>
                            <th scope="col" class="px-4 py-3">Status</th>
                            <th scope="col" class="px-4 py-3">Order ID</th>
                            <th scope="col" class="px-4 py-3">Placed Date</th>
                            <th scope="col" class="px-4 py-3">Price</th>
                            <th scope="col" class="px-4 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((item)=>{ 
                        return      <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
                            <td class="px-4 py-3">{item.status}</td>
                            <td class="px-4 py-3">{item.id}</td>
                            <td class="px-4 py-3">{item.date}</td>
                            <td class="px-4 py-3">Rs.{item.amount}</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                               
                                
                               <div className='flex space-x-4 text-xl'>
                                  {item.status != "completed"? <MdModeEditOutline onClick={()=>toggleDelete(item.id)} className=' hover:bg-green-500' />: ""} 
                                  {/* <!-- https://medium.com/@mimranisrar6/creating-a-custom-confirmation-dialog-for-an-anchor-tag-4223514a7b0f --> */}
 {editOrd && <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog ">
    <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div class=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
        <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
            <div class="md:flex items-center">
                <div class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                <i class="bx bx-confirm text-3xl">
               &#9745;
                </i>
                </div>
                <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p class="font-bold text-gray-700">Confirm Order</p>
                <p class="text-sm text-gray-700 mt-1">Are you sure this Order has been Shipped?. This action cannot be undone.
                </p>
                </div>
            </div>
            <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                <button onClick={confirmOrder}   id="confirm-delete-btn" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-green-200 text-green-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                    Confirmed
                </button>
                <button onClick={()=>setEditOrd(false)} id="confirm-cancel-btn" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
                Cancel
                </button>
            </div>
        </div>
    </div>
</div>}
           {item.status != "completed"? <MdDelete onClick={()=>toggleDeleteOrd(item.id)} className=' hover:bg-red-500' />: ""} 
           {deleteOrd && <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog ">
    <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div class=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
        <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
            <div class="md:flex items-center">
                <div class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                <i class="bx bx-confirm text-3xl">
               &#9745;
                </i>
                </div>
                <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p class="font-bold text-gray-700">Delete Order</p>
                <p class="text-sm text-gray-700 mt-1">Are you sure you want to delete this Order?. This action cannot be undone.
                </p>
                </div>
            </div>
            <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                <button onClick={deleteOrder}   id="confirm-delete-btn" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-green-200 text-green-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                    Confirmed
                </button>
                <button onClick={()=>setDeleteOrd(false)} id="confirm-cancel-btn" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
                Cancel
                </button>
            </div>
        </div>
    </div>
</div>}
                                    <VscGoToSearch  className=' hover:bg-blue-500' />
                              </div>
                            </td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                    of
                    <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                </span>
                <ul class="inline-flex items-stretch -space-x-px">
                    <li>
                        <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </section>
       </div>
    </div>
    </>
  )
}

export default index