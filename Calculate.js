import React from  'react';
import { useState } from 'react';
const Calculate =()=>{ 
     const [data,rData]= useState('');
    const Cal=()=>
    {
   try{rData(eval(data).toString())} 
   catch(error){rData('')}
    }
    const handle=(e)=>
    {
    console.log(e.target?.name);
   rData(data?.concat(e.target?.name))
   
    }
return(
    <div className='ui segment placeholder'>
    
    <div className='ui header'>Calculate</div>
    <input defaultValue={data} /><br></br>
    <button name='1'onClick={handle}>1</button>
    <button name='2'onClick={handle}>2</button>
    <button name='3'onClick={handle}>3</button>
    <button name='4'onClick={handle}>4</button><br></br>
    <button name='5'onClick={handle}>5</button>
    <button name='6'onClick={handle}>6</button>
    <button name='7'onClick={handle}>7</button>
    <button name='8'onClick={handle}>8</button><br></br>
    <button name='9'onClick={handle}>9</button>
    <button name='+'onClick={handle}>+</button>
    <button name='-'onClick={handle}>-</button>
    <button name='*'onClick={handle}>*</button><br></br>
    <button name='/'onClick={handle}>/</button>
    <button onClick={Cal}>=</button>
    
    
    
    
    
    
    </div>
)

}
export default Calculate;