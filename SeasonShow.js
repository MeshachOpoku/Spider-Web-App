import React from  'react';
import  './SeasonShow.css';
const SeasonConfig=
{
    winter:{
    text:'Very cold',
    iconName:'snowflake'
    },
    summer:
    {
        text:'Very hot',
        iconName:'sun'
    }
}
const getSeason=(lat,month)=>{
    if(month>2&&month<9) 
    { return lat>0?'summer':'winter';    }
    else { return lat>0?'winter':'summer';}

}

const SeasonShow=(props)=>{

const season=getSeason(props.lat,new Date().getMonth());
//const text=season==='winter'? 'It is cold':'It is hot';
const {text,iconName}=SeasonConfig[season];

return<div className={`season-display ${season}`}><i  className={` icon-left massive ${iconName} icon`}/>{text}
<i className={`icon-right massive ${iconName} icon`}/>
<br></br><br></br><br></br><br></br><br></br>

<br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br>
</br><br></br><br></br><br></br><br></br><br></br><br></br><br>
</br><br></br><br></br><br></br><br></br><br></br><br></br><br>
</br><br></br><br></br><br></br><br></br><br></br><br></br><br>
</br><br></br><br></br><br></br><br></br><br></br><br></br><br>
</br><br></br><br></br><br></br><br></br><br></br><br></br><br>
</br><br></br><br></br><br></br><br></br><br></br><br></br><br>
</br><br></br><br></br><br></br><br></br><br></br><br></br><br>
</br><br></br><br></br><br></br><br></br><br></br>
</div>



}
export default SeasonShow;