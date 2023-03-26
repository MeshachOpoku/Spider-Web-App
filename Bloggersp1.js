import React from  'react';
import Likebloggers from './Likebloggers';
//import Likebloggers from './Likebloggers';
class Bloggersp1 extends React.Component
{
//render 
render(props)
{
//return
return(
//contain codes
<div>
{/*<Likebloggers>*/}
<Likebloggers>

<div className="userblog">
<img alt ="avatar"src="../foodstuff.png" height="20px" width="20px" className="userblogpic"></img>

<div className="author" ><h1>{this.props.Username}</h1></div>
<span>
<div className="timeblogged" style={{fontSize:'15px'}} ><i>{this.props.TimeAgo}</i></div>
<i style={{fontSize:'20px'}}>{this.props.Message}</i>
</span>
<br></br>

<button className="ui green   button">Admire</button>
</div>
</Likebloggers><br></br><br></br><br></br>
</div>
)
}
}
//displaying to other part of the program
export default Bloggersp1;