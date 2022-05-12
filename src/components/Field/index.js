import React from "react";

//Styles
import "./Field.scss";

const Field = ({
    placeholder,
    label,
    onClick,
    onFocus,
    value,
    onChange,
    type,
    ...props
}) => {
    return (
        <div className="field">
            <label>{label}</label>
            <input
                placeholder={placeholder}
                type={type}
                onClick={onClick}
                onFocus={onFocus}
                onChange={onChange}
                value={value}
                {...props}
            />
        </div>
    );
};

export default Field;
