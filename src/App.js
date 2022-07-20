
import './App.css';
import  { Routes, Route  } from "react-router-dom";
import Loginpage from './components/Loginpage';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';

function App() {
  
  
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Loginpage />}/>
        
        <Route  path="/products" element={<Products />}/>
        <Route path="/products/:productId" element={<ProductDetail/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
