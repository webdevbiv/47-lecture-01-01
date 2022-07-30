import React, { Fragment } from "react";

const Button = ({
    btnText = '',
    disabled = true,
    loader,
    onClick = () => { }
}) => {
    const btnName = "hey";

    // if (loader) {
    //     return <p>Loading...</p>
    // }
    return <button disabled={disabled}>
        {btnText}
        {loader ? <> Loading...</> : <> false</>}
    </button>
};

export const ButtonAnother = () => {
    const btnName = "hey"
    return <button>{btnName} offer</button>
};

export default Button;