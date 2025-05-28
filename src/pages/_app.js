import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)
  const [user, setUser] = useState({value: null})
  const [key, setKey] = useState()
  const [progress, setProgress] = useState(0);

  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
    try {
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
     localStorage.clear()
    }
    const token = localStorage.getItem("token")
    if(token){
      setUser({value: token})
      setKey(Math.random())
    }
  }, [router.query])
  
const logout=()=>{
  localStorage.removeItem("token")
  localStorage.removeItem("email")
  setKey(Math.random())
  setUser({value: null})
  router.push("/")
}
const saveCart =(myCart)=>{
  localStorage.setItem("cart", JSON.stringify(myCart))
  let subt = 0;
  let keys = Object.keys(myCart);
  for(let i = 0; i < keys.length; i++){
    subt += myCart[keys[i]].price * myCart[keys[i]].qty
  }
  setsubTotal(subt)
}

const addToCart =(itemCode, name, price, qty, size, varient)=>{
let newCart = cart;
if(itemCode in cart){
  newCart[itemCode].qty = cart[itemCode].qty + qty
}
  else (
    newCart[itemCode] = {qty: 1, name, price, size, varient }
  )
  setcart(newCart)
  saveCart(newCart)
}

const buyNow =(itemCode, name, price, qty, size, varient)=>{
  let newCart = {}
  newCart[itemCode] = {qty: 1, name, price, size, varient }
  setcart(newCart)
  saveCart(newCart)
  router.push("/checkout")
}

const removeFromCart =(itemCode, qty, name, price, size, varient)=>{
  
  let newCart = cart;
  if(itemCode in cart){
    
    newCart[itemCode].qty = cart[itemCode].qty - qty
  }
  if(newCart[itemCode].qty <= 0){
    delete newCart[itemCode]
  }
  
    setcart(newCart)
    saveCart(newCart)
  }
const clearCart = ()=>{
setcart({})
saveCart({})
}


  return (
    <>
    <LoadingBar
        color="#ec4899"
        progress={progress}
        height={4}
        waitingTime={600}
        onLoaderFinished={() => setProgress(0)}
      />
    <div className="mt-20">
    <Navbar key={key} logout={logout} user={user} cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} />
    <Component cart={cart} buyNow={buyNow} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} {...pageProps} />
    <Footer />
    </div>
    </>
  )
}
