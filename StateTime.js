import React from 'react';

class StateTime extends React.Component{
    state={Time:'2'};
   componentDidMount(){
 setInterval(()=>{
this.setState({Time: new Date().toLocaleTimeString()})
 },3000)
   }



   //displaying
   render(){
    return<div >Heck time:{this.state.Time}</div>
  }
  }
export default StateTime;