import React from  'react';

class UserNotice extends React.Component
{ render()
    {
   //code show pdf pic ,text,button,text
  //default one:
  return(
    <div>
          <div className="ui placeholder segment">
              <div className="ui icon header" >
              <i className=" pdf file outline icon "/>
              <p>No documents are listed for this user</p>
              <div className="ui primary button">Add Document</div>

            </div>  
       </div>
       <div className="ui placeholder segment">
           <div className=" ui header">
            <p>For your information</p>
           </div>
          <div><p> There is upcoming feature to propel this platform</p></div>
           </div>
    </div>
  )
 
    }
 

}
export default UserNotice;