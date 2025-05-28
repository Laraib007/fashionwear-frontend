import Image from "next/image";
import localFont from "next/font/local";
import slider1 from "../component/Img/slider1.jpg"
import slider2 from "../component/Img/slider2.jpg"
import slider3 from "../component/Img/slider3.jpg"
import slider4 from "../component/Img/slider4.jpg"
import slider5 from "../component/Img/slider5.jpg"
import Head from "next/head";
import { TbHanger } from "react-icons/tb";
import { IoBagCheck } from "react-icons/io5";
import tshirt from "../component/Img/tshirt.jpg"
import mugs from "../component/Img/mugs.jpg"
import hoodies from "../component/Img/hoodie.jpg"
import stickers from "../component/Img/stickres.jpg"



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from "next/link";





const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  return (
    <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    </Head>
     <section className="text-gray-600 body-font">
  <div className="container px-5  mx-auto">
    {/* <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome to Our Ecommerce Store</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Wear Whatever you want! you want to wear the Latest Fashion? wear it with FashionWear.com</p>
    </div> */}
    


<div className=" z-10 ">
 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={slider1} width={"1600"} height={100} /></SwiperSlide>
        <SwiperSlide><Image src={slider2} width={"1500"} height={100} /></SwiperSlide>
        <SwiperSlide><Image src={slider3} width={"1600"} height={100} /></SwiperSlide>
        <SwiperSlide><Image src={slider4} width={"1600"} height={100} /></SwiperSlide>
        <SwiperSlide><Image src={slider5} width={"1600"} height={100} /></SwiperSlide>
      </Swiper>
</div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">FASHION WEAR PREMIUM COLLECTION</h1>
        <div class="h-1 w-80 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap items-center justify-center -m-4">
      <div class="xl:w-2/5 md:w-1/2 p-4 ">
      <Link href={"/tshirt"}>
        <div class="bg-gray-100  p-6 rounded-lg">
          <Image className="mx-auto" src={tshirt} height={600} width={250}/>
          <h3 class="tracking-widest text-indigo-500 text-xs  text-center font-medium title-font">TSHIRTS</h3>
        </div>
        </Link>
      </div>
          <div class="xl:w-2/5 md:w-1/2 p-4 ">
          <Link href={"/mugs"}>
        <div class="bg-gray-100  p-6 rounded-lg">
          <Image className="mx-auto" src={mugs} height={600} width={295}/>
          <h3 class="tracking-widest text-indigo-500 text-xs  text-center font-medium title-font">MUGS</h3>
        </div>
        </Link>
      </div>
      
       <div class="xl:w-2/5 md:w-1/2 p-4 ">
       <Link href={"/hoodies"}>
        <div class="bg-gray-100  p-6 rounded-lg">
          <Image className="mx-auto" src={hoodies} height={600} width={320}/>
          <h3 class="tracking-widest text-indigo-500 text-xs text-center font-medium title-font">HOODIES</h3>
        </div>
         </Link>
      </div>
     
            <div class="xl:w-2/5 md:w-1/2 p-4 ">
            <Link href={"/stickers"}>
        <div class="bg-gray-100  p-6 rounded-lg">
          <Image className="mx-auto" src={stickers} height={600} width={300}/>
          <h3 class="tracking-widest text-indigo-500  text-center text-xs font-medium title-font">STICKERS</h3>
        </div>
        </Link>
      </div>
    </div>
  </div>
</section>
    <div className="flex items-center justify-center text-center flex-wrap m-4 ">

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-8 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
           <TbHanger className="w-8 h-8" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Premium Cloths</h2>
          <p className="leading-relaxed text-base">Our T-Shirts are 100% made of cotton.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Free Shipping</h2>
          <p className="leading-relaxed text-base">We ship all over Pakistan for FREE.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
            <IoBagCheck className="w-8 h-8" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Exciting Offers</h2>
          <p className="leading-relaxed text-base">We provide amazing offers & discounts on our products.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
