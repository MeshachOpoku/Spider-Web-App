import React from  'react';
import SeasonShow from './SeasonShow';
import Spinner from './Spinner';
class Season extends React.Component
{  //finds location
 
        state={lat:null,errorMessage:''}
 
   
    componentDidMount()
{

  window.navigator.geolocation.getCurrentPosition(
    position=>{this.setState({lat:position.coords.latitude}); },
    err=>{ this.setState({errorMessage:err.message})}
  )
}
 ContentOfSpinner=()=>{
  //require bundle or data  to show latitude
  if(this.errorMessage&&!this.state.lat)
   {
     return <div>Error:{this.errorMessage}</div>
   } 
  if(!this.errorMessage&&this.state.lat)
 { return<div>
 <SeasonShow lat={this.state.lat}/></div>}
 return <div><Spinner message="loading"/></div>
}
render ()
   {  //{}
   return <div>{this.ContentOfSpinner()}</div>
  }

}
export default Season;