import React,{useState} from 'react' 
import './Style.css'

export default function Container1() {
  const[expression,setExp]=useState('');
  
  const clear=()=>{
    setExp ('');
  }
  const resultat=()=>{
    try {
    let N=expression;
      setExp(eval(N));
      
     }
    catch(erreur){
      setExp('erreur de l expression')
    }
  }
  const valeur=(e)=>{
  
  
  let val=expression;
  let NouvauVal=val+e.target.value;
  setExp(NouvauVal);
  }
  


  return (
    <div className='calcul1'>
      <br />
      <input value={expression} type="text" className='calcul'/>
      <br /> <br />
          <input onClick={(e)=>valeur(e)} type="button" value='1' className='num1'/>
          <input onClick={(e)=>valeur(e)} type="button" value="2" className='num2'/>
          <input onClick={(e)=>valeur(e)} type="button" value="3" className='num3'/>
          <input onClick={clear} type="button" value="C" className='op5'/>
          
          <br />
          <input onClick={(e)=>valeur(e)} type="button" value="4" className='num4'/>
          <input onClick={(e)=>valeur(e)} type="button" value="5" className='num5'/>
          <input onClick={(e)=>valeur(e)} type="button" value="6" className='num6'/>
          <input onClick={(e)=>valeur(e)} type="button" value="+" className='op1'/>
          
          <br />
          <input onClick={(e)=>valeur(e)} type="button" value="7" className='num7'/>
          <input onClick={(e)=>valeur(e)} type="button" value="8" className='num8'/>
          <input onClick={(e)=>valeur(e)} type="button" value="9" className='num9'/>
          <input onClick={(e)=>valeur(e)}  type="button" value="-" className='op2'/>
          <br />
          <input onClick={(e)=>valeur(e)} type="button" value="0" className='num0'/>
          <input onClick={(e)=>valeur(e)} type="button" value="/" className='op4'/>
          <input onClick={(e)=>valeur(e)} type="button" value="*" className='op3'/>
          
          <br />
          <input onClick={(e)=>valeur(e)} type="button" value="(" className='arche1'/>
          <input onClick={(e)=>valeur(e)} type="button" value=")" className='arche2'/>
          <input onClick={resultat} type="button" value="=" className='op6'/>
      
    </div>
  )
}
