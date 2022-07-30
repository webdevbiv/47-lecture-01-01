import React, { Fragment } from "react";

const Button = ({btnText, disabled}) => {

    const btnName = "hey"
    return <button disabled={disabled}>{ btnText }</button>
};

export const ButtonAnother = () => {
    const btnName = "hey"
    return <button>{ btnName } offer</button>
};

export default Button;