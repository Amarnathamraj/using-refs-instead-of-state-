import React from "react";

import classes from './Button.module.css';
const button=(props)=>{
    return(
        <button
        className={classes.button}
        type={props.type||'button'}
        onClick={props.onClicking}

        > {props.children}</button>
    );
};
export default button;