import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';

function Button(props) {
    return (
        <BootstrapButton
        size="sm"
            onClick={props.nominationHandler}
            className={"button custom-button" + props.class}
            disabled={!props.enabled}
            style={{background: '#FCA311', border: 'none', color: '#0A0A0A'}}>
                {props.class}
        </BootstrapButton>
    )
}

export default Button;