import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
    return (
        <button className={props.style} >{props.label}</button>
    )
}

export default CoolButton;