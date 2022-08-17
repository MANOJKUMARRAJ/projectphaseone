import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const Navbartop = ({onAdd,cart}) => {
    let history=useNavigate()
    const cartpa=()=>{
        
        history('/cartdata')

    }
    const lopp=()=>{
        history("/")
    }
    const chatwc=()=>{
        history('/chat')
    }
    return (
        <div className='topp'>
            <div className='firstt' onClick={lopp}>
                <a>Products  </a>
                {/* <button style='font-size:24px'>Button <i class='far fa-comments' style='font-size:28px;color:red'></i></button> */}
            </div>
            <div className='midd' onClick={chatwc}>
            
            <img id='imgom' src={'https://c8.alamy.com/comp/2DDY26E/green-robot-or-chatbot-logo-template-chat-bot-icon-for-website-vector-illustration-in-modern-flat-style-cartoon-character-isolated-on-white-2DDY26E.jpg'}  alt='' />
            </div>
            <div className='secondd' onClick={cartpa}>
                <div className='herecartt'>
                    <span>
                        <i className='fas fa-cart-plus'></i>
                    
                    </span>
                    <span>{cart.length}</span>

                </div>
            </div>
        </div>
    )
}
export default Navbartop