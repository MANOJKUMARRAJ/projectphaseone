

import React, { Component } from 'react'
import './Spinco.css'



export default class Spinco extends Component {
  
 
  state = {
    name : "circle"
  }
  startRotation=()=>{
    this.setState({
      name: "circle start-rotate"
    });
    setTimeout(()=>{
      this.setState({
        name: "circle start-rotate stop-rotate"
      });
      
    }, Math.floor(Math.random() * 10000) + 1)

  }
  

 

  render() {
    
    return (
      <div className="Spinco">
        
      
        <div className='arrow'></div>
        <ul className={this.state.name}>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>&#129322;</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>10%</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>&#128525;</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>12%</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>&#128521;</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>14%</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>&#128536;</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>16%</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>&#129314;</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>18%</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>&#129324;</div>
          </li>
          <li className='il'>
            <div className='text' contentEditable='true' spellCheck='false'>20%</div>
          </li>
        </ul>
        <button className='spinbtn' onClick={this.startRotation}>SPIN</button>
  
  
      </div>
    )
  }
}
