import  React from  'react';

class Likebloggers extends React.Component
{
    render()
    {
     return(
          <div className="bloggger like" >
            <div className="ui massive card" style={{position:'relative' , marginLeft:'450px' ,marginRight:'30px'  }}>
             {this.props.children}
             <div className="ui primary button">Read more</div>
            </div>

        </div>
     )


    }



}
export default Likebloggers;
// this portion of code cover Bloggersp1 and style that is why there is this.props.chilren 