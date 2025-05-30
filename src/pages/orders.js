import React, { useEffect, useState } from 'react'
import Orders from '../../backend/models/Orders'
import { useRouter } from 'next/router';
import Link from 'next/link'

const orders = () => {
  const [order, setOrder] = useState([])
  useEffect(() => {
    
  const orderFetch = async ()=>{
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token: localStorage.getItem('token')}),
    });
  
    const result = await response.json();
    setOrder(result)
    }
  console.log(order)
    if(!localStorage.getItem('token')){
      useRouter.push('/')
    }
    else{
      orderFetch()
    }
  }, [])
  return (
    <div><section class="py-8 antialiased  md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-5xl">
        <div class="gap-4 sm:flex sm:items-center sm:justify-between">
          <h2 class="text-xl font-semibold text-gray-900  sm:text-2xl">My orders</h2>
  
          <div class="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
            <div>
              <label for="order-type" class="sr-only mb-2 block text-sm font-medium text-gray-900 ">Select order type</label>
              <select id="order-type" class="block w-full min-w-[8rem] rounded-lg border border-gray-300  p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>All orders</option>
                <option value="pre-order">Pre-order</option>
                <option value="transit">In transit</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
  
            <span class="inline-block text-gray-500 dark:text-gray-400"> from </span>
  
            <div>
              <label for="duration" class="sr-only mb-2 block text-sm font-medium text-gray-900 ">Select duration</label>
              <select id="duration" class="block w-full rounded-lg border border-gray-300  p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>this week</option>
                <option value="this month">this month</option>
                <option value="last 3 months">the last 3 months</option>
                <option value="lats 6 months">the last 6 months</option>
                <option value="this year">this year</option>
              </select>
            </div>
          </div>
        </div>
  
        <div class="mt-6 flow-root sm:mt-8">
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            { order.map((item)=>{ 
              return <div class="flex flex-wrap items-center gap-y-4 py-6">
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Order ID:</dt>
                <dd class="mt-1.5 text-base font-semibold text-gray-900 ">
                  <a href="#" class="hover:underline">{item.id}</a>
                </dd>
              </dl>
  
              <dl class="w-1/2 sm:w-1/4 ml-4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Date:</dt>
                <dd class="mt-1.5 text-base font-semibold text-gray-900 ">{item.date}</dd>
              </dl>
  
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Price:</dt>
                <dd class="mt-1.5 text-base font-semibold text-gray-900 ">{item.amount}</dd>
              </dl>
  
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                <dd class="me-2 mt-1.5 inline-flex items-center rounded bg-blue-300 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:text-black">
                  <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                  </svg>
                  {item.status}
                </dd>
              </dl>
              <dl >
                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Shipment:</dt>
                <dd class="me-2 mt-1.5 inline-flex items-center rounded bg-blue-300 px-2.5 py-0.5 text-xs font-medium text-primary-600 dark:text-black">
                  <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                  </svg>
                  {item.status}
                </dd>
              </dl>
              <Link href={'/order?id=' + item.id}>
              <div class="w-full mt-4 grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-center gap-4">
                  <a href="#" class="w-full inline-flex justify-center rounded-lg  border border-gray-200  px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black dark:focus:ring-gray-700 lg:w-auto">View details</a>
              </div></Link>
            </div>})}
          </div>
        </div>
  
        <nav class="mt-6 flex items-center justify-center sm:mt-8" aria-label="Page navigation example">
          <ul class="flex h-8 items-center -space-x-px text-sm">
            <li>
              <a href="#" class="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300  px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black">
                <span class="sr-only">Previous</span>
                <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" class="flex h-8 items-center justify-center border border-gray-300  px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black">1</a>
            </li>
            <li>
              <a href="#" class="flex h-8 items-center justify-center border border-gray-300  px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" class="z-10 flex h-8 items-center justify-center border border-primary-300 bg-blue-50 px-3 leading-tight text-primary-600 hover:bg-blue-100 hover:text-primary-700 dark:border-gray-700  ">3</a>
            </li>
            <li>
              <a href="#" class="flex h-8 items-center justify-center border border-gray-300  px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black">...</a>
            </li>
            <li>
              <a href="#" class="flex h-8 items-center justify-center border border-gray-300  px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black">100</a>
            </li>
            <li>
              <a href="#" class="flex h-8 items-center justify-center rounded-e-lg border border-gray-300  px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black">
                <span class="sr-only">Next</span>
                <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section></div>
  )
}


export default orders