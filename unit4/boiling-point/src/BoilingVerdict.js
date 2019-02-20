import React from 'react';

function BoilingVerdict(props){
    if(props.temperature >=100){
        return(
            <h1>Boiling</h1>
        )
    }else{
        return(
            <h1>NOT Boiling</h1>
        )
    }
}



export default BoilingVerdict