import React from 'react';
var me=0;// me is a global variable  accessible everywhere
class Spent extends React.Component
{   state={text:'',secreader:'',minutesreader:''}
 //state variables in total of 3
componentDidMount(){
    // assignment for some var
    this.state.secreader=1;
    this.state.minutesreader=0;
      {
        // setInterval like to loop  to make ComponentDidMount loop too
    setInterval(()=>this.setState({text:new Date().toLocaleTimeString()}),1000)
}

}
 Holdtime()
{   
    //know that the function is nothing  dont be
    // afraid just a container for what was supposed to be in return statement.But to make clean code lead to this.
    this.state.secreader++;me=this.state.secreader
    if(me%60===0){ 
     return<div className="ui loading red button">{this.state.minutesreader++} minute spent</div>
 }
 else{
     return<div className="ui green  button">{this.state.minutesreader}minutes elapsed</div>
 }

}

render(){console.log(this.state.secreader);
return(<div>{this.Holdtime()}</div>)
}
}
export default Spent;