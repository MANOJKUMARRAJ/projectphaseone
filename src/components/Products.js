import React, { useState} from 'react'
import productsData from './products.json'
import Backtotopbutton from './Backtotopbutton'
import ReactPaginate from 'react-paginate'

import { useNavigate, Link } from 'react-router-dom'
import Navbartop from './Navbartop'

import '../App.css'
const Products = ({onAdd,cart,removcart}) =>  {
    let history = useNavigate();
    function logoutto() {
        history("/")
    }
    function coupoon() {
        history('/offerpage')
    }
   
    // console.log(productsData);
    let [data, setData] = useState(productsData.products);
    const [pageNumber,setPageNumber]=useState(0)

    const productsPerPage=20
    const pagesVisited=pageNumber*productsPerPage
    const displayProducts=data.slice(pagesVisited,pagesVisited+productsPerPage)
                              .map((product)=>{
                                return(
                                    <div className='allpro' key={product.id}>
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.thumbnail} width="460px" height="180px" alt='product is here' />
                                    </Link>
                                    <h3>{product.title}&nbsp;&nbsp; &nbsp;&nbsp;Made in <span class="iconify" data-icon="emojione-v1:flag-for-india"></span></h3>
                                    <h3 className='b'>{product.brand}</h3>
                                    <h3>Price: Rs-{product.price} &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Discount % ={product.discountPercentage}</h3>
                                    <p className='blink'>Products Left in stock : {product.stock}</p>
                                    <h3 className='b'>Rating: {product.rating}</h3>
                                    <Link to={`/products/${product.id}`}><button className='bot' >View Details of Product</button></Link>
                                    {/* <button className='bott' key={product.id}   onClick={()=>handleClick(product)}>Add to cart</button> */}
                                    <button type='button' onClick={(e)=>{
                                    e.preventDefault()
                                    onAdd(product)}}>Add to Cart</button>
                                </div>
                                    

                                )
                              })
    

    // const [value,setValue]=useState('')
    // const onChange=(event)=>{
    //     setValue(event.tartget.value)
        
    // }
    // const onSearch=(searchTerm)=>{
    //     console.log('search',searchTerm)
    // }

    const pageCount=Math.ceil(data.length / productsPerPage);
    const changePage=({selected})=>{
        setPageNumber(selected)
    }



    const handlePrice = () => {
        const sortedData = [...data.sort((a, b) => a.price - b.price)];
        setData(sortedData);
    }
    const handlePricehl = () => {
        const sortedData = [...data.sort((g, h) => h.price - g.price)];
        setData(sortedData);
    }
    const handleRating = () => {
        const sortedData = [...data.sort((c, d) => c.rating - d.rating)];
        setData(sortedData);
    }
    const handleRatingm = () => {
        const sortedData = [...data.sort((i, j) => j.rating - i.rating)];
        setData(sortedData);
    }
    const handleDiscount = () => {
        const sortedData = [...data.sort((e, f) => f.discountPercentage - e.discountPercentage)];
        setData(sortedData);
    }
    const handleStock = () => {
        const sortedData = [...data.sort((q, r) => q.stock - r.stock)];
        setData(sortedData);
    }
    const allpro= () => {
        const sortedData = [...data.sort((y, z) => y.id - z.id)];
        setData(sortedData);
    }
    const searchproducts=(e)=>{
        setData(data.filter((a)=>a.title.startsWith(e.target.value)))
    }
    // const handleClick=(product)=>{
      
    //     setCart([...cart,product])
    //     console.log(cart)

        
  
        
    //     // alert('added to cart')
     

    // }
      


    return (
        <div className='mama'>
            <Navbartop onAdd={onAdd} cart={cart}/>
        
            {/* <h1>Products Page</h1> */}
            {/* <div>
                <label>Search  : </label>
                <input className='searchh' type='text' placeholder='search here by title name ....'  value={value} onChange={onChange} ></input>
                <button onClick={()=>onSearch(value)}>Search</button>
            </div> */}
            <input type='text' onKeyUp={searchproducts} placeholder='search here for products with title name....' />
            
            
            <button onClick={handlePrice}>Sort by price Low to High</button>
            
            
            <button onClick={handlePricehl}>Sort by price High to Low</button>
            <div onClick={coupoon}><h4>  Want more Offers   </h4>
            <img src={'data:image/jpeg;base64,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'} alt='coupon'  height='70px' width='70px'/></div>
          
           
            <div>
            <button onClick={handleRatingm}>Sort by More Rating</button>
            <button onClick={handleRating}>Sort by Less Rating</button>
            
            </div>
            <button onClick={handleDiscount}>Sort by more Discount</button>
            <button onClick={handleStock}>Sort by stock</button>
            
            <div><button onClick={allpro} className='l'>All Products</button></div>
            <div><button onClick={logoutto} className='logg'>Logout</button></div>
            <span class="iconify" data-icon="emojione-v1:flag-for-india"></span>
            {/* <div><h1>{cart.index}</h1></div>
            <div className='herecart'>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{cart.length}</span>
            </div> */}


            <div className='grmn'>
                {displayProducts}
               <div className='pagee'>
               <ReactPaginate 
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
                />
               </div>
            </div>
            <Backtotopbutton />





        </div>
    )
}


export default Products