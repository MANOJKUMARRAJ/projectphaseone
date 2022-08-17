
import './App.css';
import React,{useState} from 'react';

import  { Routes, Route  } from "react-router-dom";
import Loginpage from './components/Loginpage';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import Cartdata from './components/Cartdata';
import Logincart from './components/Logincart';
import Addresspage from './components/Addresspage';
import {useNavigate} from 'react-router-dom'
import Chatwithcust from'./components/Chatwithcust';
import Offerpage from './components/Offerpage';
import Mathco from './components/Mathco';
import Spinco from './components/Spinco';
import Memoryco from './components/Memoryco';
// import  Ofer  from './components/ofer';

function App() {
  
  
  let history=useNavigate()
  const [cart, setCart] = useState([])
  // console.log(cart)
  const [total,setTotal]=useState(0)
  // console.log(total)
  
  const onAdd=(data)=>{
    const exist=cart.find((item)=>item.id === data.id)
    
    if(exist){
      setCart(
        cart.map((item)=>
        item.id === data.id
        ? {...exist,quantity:exist.quantity +1}
        :item
        )
      )
    } else {
      setCart([...cart,{...data,quantity :1}])
    }
    setTotal(data.price+total)
  }
  const onDelete=(data)=>{
    const existt=cart.find((item)=>item.id === data.id)
    
    if(existt){
      setCart(
        cart.map((item)=>
        item.id === data.id
        ? {...existt,quantity:existt.quantity -1}
        :item
        )
      )
    } else {
      setCart([...cart,{...data,quantity :1}])
    }
    setTotal(data.price+total)
  }
  const removcart=()=>{
    const rem=[cart.length===0]
    setCart(rem)
    history('/cartdata')
  }
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Loginpage cart={cart} />}/>
        <Route  path="/logincart" element={<Logincart  />}/>
        <Route  path="/chat" element={<Chatwithcust  />}/>
        <Route  path="/offerpage" element={<Offerpage  />}/>
        <Route  path="/mathc" element={<Mathco  />}/>
        {/* <Route  path="/ofr" element={<Ofer  />}/> */}
        <Route  path="/spinc" element={<Spinco  />}/>
        <Route  path="/memoryc" element={<Memoryco />}/>
        <Route  path="/addresspage" element={<Addresspage total={total}  cart={cart}  />}/>
        
        <Route  path="/products" element={<Products  onAdd={onAdd} cart={cart} removcart={removcart}/>}/>
        <Route  path="/cartdata" element={<Cartdata cart={cart} total={total} onDelete={onDelete}  removcart={removcart}/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}></Route> 
      </Routes>
      
      
    </div>
  );
}

export default App;
