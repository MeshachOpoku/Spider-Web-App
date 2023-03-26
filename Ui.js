import React from 'react';


class Ui extends  React.Component{
//render house return
// in the retun part the whole lot of different staff:heading,button,label,
render(){ 
 return(
<div>
<div ui="ui container">{/* heading*/}
<h1 className="ui large header">Heading</h1>
<h2 className="ui tiny header">heading</h2>
<h1 className="ui medium header">Heading</h1>
<h1 className="ui huge header">Heading</h1>
<h1 className="ui small header">Heading</h1>
<h1 className="ui  header">Heading</h1>
<h1 className="ui header">Heading</h1>
<h1 className="ui header">Heading</h1>
<h1 className="ui small header">Spider</h1>
</div>

    <button className="ui button">Read More1 </button>{/*color:default color*/}
    <button className="ui primary button">Read More2</button>{/*:comment=>color:blue*/}
    <button className="ui secondary button">Read More3</button>{/*:comment=>color:black*/}
    <button className="ui positive button">Read More4</button>{/*:comment=>color:green*/}
    <button className="ui negative button">Read More5</button>{/*:comment=>color:red*/}
    <button className="ui button">Read More6</button>{/*:comment=>color:default color*/}

{/*button creation with user's color*/}
<div >
    <button className="ui red button">Like</button>
    <button className="ui yellow button">Like</button>
    <button className="ui green button">Like</button>
    <button className="ui black button">Like</button>
    <button className="ui blue button">Like</button>
    <button className="ui pink button">Like</button>
    <button className="ui primary button">Like</button>
    {/*loading*/}
    <button className="ui  loading pink button">Send</button>
    <button className="ui loading red button">Like</button>
    <button className="ui loading yellow button">Like</button>
    <button className="ui loading green button">Like</button>
    <button className="ui loading black button">Like</button>
    <button className="ui loading blue button">Like</button>
    <button className="ui loading pink button">Like</button>
    <button className="ui loading  primary button">Like</button>
    {/*Comment Altering size*/}
    <button className="ui massive red button">Like</button>
    <button className="ui large yellow button">Like</button>
    <button className="ui big green button">Like</button>
    <button className="ui  huge black button">Like</button>
    <button className="ui mediumblue button">Like</button>
    <button className="ui  tiny pink button">Like</button>
    <button className="ui  small primary button">Like Small</button>
    <button className="ui mini red button">Like Mini</button>

    {/*disable*/}
    <button className="ui disabled yellow button">LikeDISABLED</button>
    <button className="ui disabled green button">Like</button>
    <button className="ui disabled black button">Like</button>
    <button className="ui  disabled blue button">Like</button>
    <button className="ui pink button">Like</button>
    <button className="ui primary button">Like</button>

    {/*basic button is quite nice*/}<br></br>
    {'Nice '}
    <button className="ui basic red  button">Share</button>
    <button className="ui basic yellow button">share</button>
    <button className="ui basic pink button">share</button>
    <button className="ui basic green button">share</button>
    <button className="ui basic black button">share</button>
    <button className="ui basic white button">share</button>
    <button className="ui basic indigo button">share</button>
    {/*Longing a button  with:fluid keyword*/}
    <button className="ui fluid basic yellow button">Like</button>
    <button className="ui fluid basic pink button">Like</button>

    <div>
{/*icon creation :with className= "iconName  icon "*/}
<i className="cloud icon"></i>
<i className="add to calender icon"></i>
<i className="trademark icon"></i>
<i className="signal icon"></i>
<i className="idea icon"></i>
<i className="alarm icon"></i>
<i className="lab icon"></i>
<i className="privacy icon"></i>
<i className="registered icon"></i>
<i className="setting icon"></i>
<i className="setting icon"></i>
<button><i className="cloud icon"></i></button>
<button><i className="wifi icon"></i></button>
<button><i className=" call icon"></i></button>
<button><i className="pause icon"></i></button>
<button><i className="play icon"></i></button>
<button><i className="cancel icon"></i></button>
<button><i className="shuffle icon"></i></button>
<button><i className="camera  icon"></i></button>
<button><i className="home icon"></i></button>
<button><i className="camera front icon"></i></button>
<button><i className="call   icon"></i></button>
<button className="ui loading  button">Hi</button>
<button className="ui  teal button">Like90</button>


<br></br>
{/*<div className="ui breadcrumb">
<a href="">Home</a>
<div className="ui divider">|</div>
<a href="">Team</a>
<div className="ui divider">|</div>
<a href="">Contact</a>
</div>*/}<hr></hr>
<div className="ui form">
<div className=" shortfield">
    <input type="text"  placeholder="xxxx"></input></div><br></br><br></br>
    <hr></hr>{/*message*/}
    <div className=" ui message">
    <div >Hello Here it Ends</div><p>Read More to know.</p></div>
<label>
    <div className=" ">
    <div >Hello Here it Ends</div><p>Read More to know.</p></div>
</label>
    <br></br>
   <br></br><br></br>
</div>
</div>
</div></div>
 )
}
}
//export to other parts
export default Ui;