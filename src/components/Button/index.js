import React from "react";

//Styles
import "./Button.scss";

const Button = ({
    children,
    onClick,
    theme = "usually",
    className,
    disabled = false,
}) => {
    return (
        <button
            className={`button ${className} ${disabled && "disabled"} ${theme}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
