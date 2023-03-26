import React from 'react';


class Aclock extends React.Component
{ state={time:'',y:''}// state

  //lifecycle
  componentDidMount()
  {
    setInterval(()=>
    {

     this.setState({time:new Date().toLocaleTimeString(),month:new Date().getMonth()})   
    },1000
    )



  }
  
FindHelp(){
    this.state.y=this.state.time;
    switch(this.state.month)
  { case 0:
return <div>{this.state.y}  <br></br>Month:Jan</div>
 break;
 case 1:
     return <div>Feb</div>
       break;
       case 2:
         return <div> March</div>
           break;
      default:
         return<div>Not part of month</div>          
  }
 


}

  
    render()
    {   
return<div>{this.FindHelp()}</div>
    }



}
export default Aclock;