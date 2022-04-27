import React from "react";

//Styles
import "./Field.scss";

const Field = ({ placeholder, label, onChange, type, ...props }) => {
    return (
        <div className="field">
            <label>{label}</label>
            <input
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};

export default Field;
