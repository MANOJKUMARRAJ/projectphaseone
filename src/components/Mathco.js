import React,{useState} from 'react'
import './Chat.css'
import { useNavigate} from 'react-router-dom'

function Mathco() {
  const [code,setCode]=useState('xxxxx')
  const [ans,setAns]=useState('')
  const [sol,setSol]=useState(41)
  // const [errr,setErrr]=useState('')
  const [errrg,setErrrg]=useState('')
  
  const [isDisabled, setDisabled] = useState(true);
    let history = useNavigate();
    function backop() {
        history("/offerpage")
        
    }
   
    
    
   
   const handleSubmit=(e)=>{
    e.preventDefault();
    // const data={ans}
    console.log('ans',ans)
    
    
    setAns('')
    if (Number(sol) === Number(ans) && (ans.length>1)) {
      setDisabled(false)
      setErrrg('correct answer')
      
  
      
      
    } else  if (ans.length>1) {
      
      // setErrr('Wrong Answer Please try again')
      
    }
   }
   console.log('sol',sol)
  
  
  const cod=()=>{
    setCode('Rohit45')
  }
   
  return (
    <div> <p id='totle'>Maths</p>
    <div onClick={backop}><button id='backto'>Back to offerpage</button></div>
    <h3 className='mathh'>Just Solve this Simple Question</h3>


   <div className='qued'> <form onClick={handleSubmit}>
      <label>10 × 4 - 2 × (4² ÷ 4) ÷ 2 ÷ 1/2 + 9&nbsp;&nbsp;=&nbsp;&nbsp;</label>
      <input name='ans' type='number' placeholder='type your ans' value={ans} onChange={(e)=>setAns(e.target.value)} />
      {/* <p className='erred'>{errr}</p> */}
      <p className='erredg'>{errrg}</p>
      <button>Submit Ans</button>
    </form></div>
    
    
    
    
    <div className='gdiv'><button disabled={isDisabled} onClick={cod}>Generate code</button></div>
    <div className='coddiv'>  <h3 >Your code is for 15% off on All Products is : {code}</h3></div>
      
      
      </div>
  )
}

export default Mathco