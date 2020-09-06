import React from 'react';

function Button(props){
    return (
        <button 
            onClick={props.nominationHandler}
            className={"button " + props.class}
            disabled={!props.enabled}
        >
            {props.class}
        </button>
    )
}

export default Button;