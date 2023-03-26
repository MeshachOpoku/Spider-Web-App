import React from 'react';
const Spinner=props=>
{


return(
    <div>

<div className="ui active  loader"><br></br><br></br>
{props.message}
<p>User allow to know weather</p></div>

    </div>  
)



};
Spinner.defaultProps={
    message:'Loading.....'
}

export default Spinner;