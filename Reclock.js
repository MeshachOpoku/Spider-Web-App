import React from 'react';
class Reclock extends  React.Component
{
state={tim:''}
componentDidMount()
{

setInterval(()=>{

    this.setState({tim:new Date().toLocaleTimeString()})
},1000)

}
     
render()
{

return(

    <div>The time is:{this.state.tim}</div>
)


}


}
export default Reclock;