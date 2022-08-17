// import React from 'react'
// import './Chat.css'
// import { useNavigate} from 'react-router-dom'

// function Offerpage() {
//     let history = useNavigate();
//     function mathoo() {
//         history("/mathc")
//     }
//     function productoo() {
//         history("/products")
//     }
//     function spinoo() {
//         history("/spinc")
//     }
//     function memoryoo() {
//         history("/memoryc")
//     }
//   return (
//     <div>
//         <p id='totle'>Offerpage</p>
//         <div onClick={productoo}><button id='backto'>Back to  Products page</button></div>
//         <div className='firstddd'>
//             <h1 className='aboup'>Unlock Coupon Codes (10-35)% Off by Playing Games</h1>
//             <h3 className='gre'>On eve of INDIA 75th Year of INDEPENDENCE</h3>
//             <h5 className='cen'><span class="iconify" data-icon="emojione-v1:flag-for-india"></span></h5>
//         </div>
//         <div className='seconddd'>
//             <div className='onef1' >
//                 <h1 className='headm'>Maths</h1>
//                 <h2 className='quotat'>It's Simple !!</h2>
//                 <h3 className='datatext' >Answer the Question</h3> 
//                 <h3  className='datatext'>&nbsp;&nbsp;&&nbsp;&nbsp;</h3> 
//                 <h3  className='datatext'>Win the Coupon Code</h3> 
//                 <h3 className='datatext'>&nbsp;&nbsp;15% OFF&nbsp;&nbsp;</h3> 
//                 <h3 className='datatext'>on All Products</h3> 
                    
//                 <div><button className='bone1' onClick={mathoo}>Play Quiz &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8250;</button></div>
//             </div>
//             <div className='onef2' >
//             <h1 className='headm'>Luck !!</h1>
//                 <h2 className='quotat'>It's Fate ??</h2>
//                 <h3 className='datatext' >Spin the Wheel</h3> 
//                 <h3  className='datatext'>&nbsp;&nbsp;&&nbsp;&nbsp;</h3> 
//                 <h3  className='datatext'>Win the Coupon Code</h3> 
//                 <h3 className='datatext'>&nbsp;&nbsp;(10-20)% OFF&nbsp;&nbsp;</h3> 
//                 <h3 className='datatext'>on All Products</h3> 
//             <div><button className='bone2' onClick={spinoo}>Spin Wheel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8250;</button></div>
//             </div>
//             <div className='onef3'>
//             <h1 className='headm'>Memory</h1>
//                 <h2 className='quotat'>It's Remembering</h2>
//                 <h3 className='datatext' >Match the Cards</h3> 
//                 <h3  className='datatext'>&nbsp;&nbsp;&&nbsp;&nbsp;</h3> 
//                 <h3  className='datatext'>Win the Coupon Code</h3> 
//                 <h3 className='datatext'>&nbsp;&nbsp;35% OFF&nbsp;&nbsp;</h3> 
//                 <h3 className='datatext'>on All Products</h3> 
//             <div><button className='bone3' onClick={memoryoo}>Play Game &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8250;</button></div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Offerpage
import React from 'react'
import './Chat.css'
import './Hover.css'
import { useNavigate} from 'react-router-dom'

function Offerpage() {
    let history = useNavigate();
    function mathoo() {
        history("/mathc")
    }
    function productoo() {
        history("/products")
    }
    function spinoo() {
        history("/spinc")
    }
    function memoryoo() {
        history("/memoryc")
    }
  return (
    <div>
        <p id='totle'>Offerpage</p>
        <div onClick={productoo}><button id='backto'>Back to  Products page</button></div>
        <div className='firstddd'>
            <h1 className='aboup'>Unlock Coupon Codes (10-35)% Off by Playing Games</h1>
            <h3 className='gre'>On eve of INDIA 75th Year of INDEPENDENCE</h3>
            <h5 className='cen'><span class="iconify" data-icon="emojione-v1:flag-for-india"></span></h5>
        </div>
        <div className='seconddd'>
        <div class="box">
            <div class="imgBox">
            <h1 className='headm'>Maths</h1>
               <h2 className='quotat'>It's Simple !!</h2>
                 <h3 className='datatext' >Answer the Question</h3> 
                 <h3  className='datatext'>&nbsp;&nbsp;&&nbsp;&nbsp;</h3> 
                 <h3  className='datatext'>Win the Coupon Code</h3> 
                 <h3 className='datatext'>&nbsp;&nbsp;15% OFF&nbsp;&nbsp;</h3> 
                 <h3 className='datatext'>on All Products</h3> 
                
            </div>
            <div class="content">
                <h2><button className='bone1' onClick={mathoo}>Play Quiz &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8250;</button></h2>
          
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
            <h1 className='headm'>Luck !!</h1>
                <h2 className='quotat'>It's Fate ??</h2>
                 <h3 className='datatext' >Spin the Wheel</h3> 
                 <h3  className='datatext'>&nbsp;&nbsp;&&nbsp;&nbsp;</h3> 
                 <h3  className='datatext'>Win the Coupon Code</h3> 
                 <h3 className='datatext'>&nbsp;&nbsp;(10-20)% OFF&nbsp;&nbsp;</h3> 
                 <h3 className='datatext'>on All Products</h3> 
                
            </div>
            <div class="content">
                <h2><button className='bone2' onClick={spinoo}>Spin Wheel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8250;</button></h2>
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
            <h1 className='headm'>Memory</h1>
                 <h2 className='quotat'>It's thinking</h2>
             <h3 className='datatext' >Match the Cards</h3> 
                 <h3  className='datatext'>&nbsp;&nbsp;&&nbsp;&nbsp;</h3> 
                 <h3  className='datatext'>Win the Coupon Code</h3> 
                 <h3 className='datatext'>&nbsp;&nbsp;35% OFF&nbsp;&nbsp;</h3> 
                 <h3 className='datatext'>on All Products</h3> 
                
            </div>
            <div class="content">
                <h2><button className='bone3' onClick={memoryoo}>Play Game &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8250;</button></h2>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Offerpage