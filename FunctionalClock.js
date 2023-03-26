import React from 'react';
import { render } from 'react-dom';

const FunctionalClock=()=>
{   
    const timeConfig=
     {time:{
      text: setInterval(()=>{new Date().toLocaleTimeString()},1000)
    }
    }

   const  iom=timeConfig.time.text
   console.log(iom);
return<div></div> 
}
export default FunctionalClock;
