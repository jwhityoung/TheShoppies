import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';



function Button(props) {
    return (
        <BootstrapButton
            onClick={props.nominationHandler}
            className={"button custom-button" + props.class}
            disabled={!props.enabled}
            style={{background: '#0A0A0A', border: 'none', color: '#EEF0F2'}}>
                {props.class}
        </BootstrapButton>
    )
}

export default Button;