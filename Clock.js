import React from 'react';
class Clock extends React.Component
{//initiate
    state={time:''} 
//create lifecycle
componentDidMount()
{ 

setInterval(()=>
{

this.setState({time:new Date().toLocaleTimeString()})
},1000);

}
    render()
    {

        return(
            <div>{this.state.time}</div>
        )
    }






}//end code
export default Clock;
