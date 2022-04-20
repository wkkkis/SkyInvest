import React from "react";

const Button = ({ children, className, onClick }) => {
    return (
        <div className={`button ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;
