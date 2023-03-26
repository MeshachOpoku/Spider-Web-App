import {useState} from 'react';
import React from 'react';

const Calculator=()=>{
 const [result,setResult]=useState(''); 
 //handle click

 const handleClick=(e)=>
 {
console.log(e.target?.name);//concat
setResult(result?.concat(e.target?.name))

 } //clear


 const clear=()=>
 {

    setResult("")
 } //backspace


 const del=()=>
 {

    setResult(result?.slice(0,-1));
 } 


 //calculate
 const calculate=()=>{
    //catching error
    try{
setResult(eval(result).toString())

    }
    catch(errors){
        setResult('')
    }
 }


 //return statement
 return(
  <div className='ui segment placeholder'>
  <div className='ui header'>React Calculator</div>
  <input defaultValue={result}/><br></br>
  <button className='ui large  label'onClick={clear}name="cl">clear</button>
  <button className='ui large  label'onClick={del}name="del">delete</button>
  <button className='ui large  label'onClick={handleClick}name="+">+</button>

  <br></br>
  <button className='ui large basic label'onClick={handleClick}name="/">/</button>
  <button className='ui normal basic label'onClick={handleClick}name="-">-</button>
  <button className='ui large basic label'onClick={handleClick}name="*">*</button>
   <button className='ui large basic label'onClick={handleClick}name="0">0</button>
  <button className='ui large basic label'onClick={handleClick}name="1">1</button>
  <br></br>
  
 <button className='ui large label'onClick={handleClick}name="2">2</button>
  <button className='ui large label'onClick={handleClick}name="3">3</button>
  <button className='ui large label'onClick={handleClick}name="4">4</button>
  <button className='ui large label'onClick={handleClick}name="5">5  {''} {''} </button>
  <br></br>
  <button className='ui large basic label'onClick={handleClick}name="6">6</button>
  <button className='ui large basic label'onClick={handleClick}name="7">7</button>
  <button className='ui normal basic label'onClick={handleClick}name="8">8</button>
  <button className='ui normal basic label'onClick={handleClick}name="9">9</button>
 <br></br> <button className='ui green massive normal label'onClick={calculate} >Equal to </button>
 
  </div>)





}
export default Calculator;
