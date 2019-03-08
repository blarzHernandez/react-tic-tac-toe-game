import React from "react";

export const Square = ({handleClick,value}) => (
    <button className="square" onClick = {handleClick}>
        {value}
    </button>
)