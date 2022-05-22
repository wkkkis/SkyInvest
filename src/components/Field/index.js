import React, { useState } from "react";

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
    const [passwordVisible, setPasswordVisible] = useState(true);

    const changeType = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className={`field ${type}`}>
            <label>{label}</label>
            <input
                placeholder={placeholder}
                type={!passwordVisible ? type : "text"}
                onClick={onClick}
                onFocus={onFocus}
                onChange={onChange}
                value={value}
                {...props}
            />
            {type === "password" ? (
                passwordVisible ? (
                    <svg
                        onClick={changeType}
                        width="22"
                        height="17"
                        viewBox="0 0 22 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.875 16.0625C21 16.1562 21.0312 16.3125 20.9375 16.4062C20.8438 16.5312 20.6875 16.5312 20.5938 16.4688L1.09375 0.96875C0.96875 0.875 0.9375 0.71875 1.03125 0.625C1.125 0.5 1.28125 0.46875 1.375 0.5625L20.875 16.0625ZM19.9062 8.90625C19.5938 9.625 19.0938 10.5625 18.375 11.4688L17.9688 11.1875C18.6875 10.2812 19.1562 9.375 19.4375 8.71875C19.5 8.59375 19.5 8.4375 19.4375 8.3125C19 7.25 18.0625 5.6875 16.6562 4.40625C15.25 3.09375 13.3438 2 10.9688 2C9.65625 2 8.5 2.34375 7.46875 2.875L7.03125 2.53125C8.15625 1.90625 9.5 1.5 11 1.5C13.5 1.5 15.5312 2.65625 17 4.03125C18.4688 5.375 19.4375 7 19.9062 8.125C20 8.375 20 8.65625 19.9062 8.90625ZM3.59375 5.53125L4 5.84375C3.3125 6.75 2.8125 7.625 2.53125 8.3125C2.46875 8.4375 2.46875 8.59375 2.53125 8.71875C2.96875 9.75 3.90625 11.3125 5.3125 12.625C6.71875 13.9375 8.625 15 11 15C12.3125 15 13.4688 14.6875 14.5 14.1562L14.9375 14.5C13.8125 15.125 12.4688 15.5 10.9688 15.5C8.46875 15.5 6.4375 14.375 4.96875 13C3.5 11.625 2.53125 10 2.0625 8.90625C1.96875 8.65625 1.96875 8.375 2.0625 8.125C2.375 7.40625 2.875 6.46875 3.59375 5.53125ZM7.5 8.625L8.03125 9.0625C8.28125 10.4375 9.5 11.5 11 11.5C11.0312 11.5 11.0938 11.5 11.1562 11.5L11.6875 11.9375C11.4688 12 11.2188 12 11 12C9.09375 12 7.53125 10.5 7.5 8.625ZM10.9688 5C12.875 5 14.4375 6.53125 14.4688 8.40625L13.9375 7.96875C13.6875 6.5625 12.4688 5.5 10.9688 5.5C10.9375 5.5 10.875 5.5 10.8125 5.53125L10.2812 5.09375C10.5 5.03125 10.75 5 10.9688 5Z"
                            fill="black"
                        />
                    </svg>
                ) : (
                    <svg
                        onClick={changeType}
                        width="22"
                        height="17"
                        viewBox="0 0 22 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.875 16.0625C21 16.1562 21.0312 16.3125 20.9375 16.4062C20.8438 16.5312 20.6875 16.5312 20.5938 16.4688L1.09375 0.96875C0.96875 0.875 0.9375 0.71875 1.03125 0.625C1.125 0.5 1.28125 0.46875 1.375 0.5625L20.875 16.0625ZM19.9062 8.90625C19.5938 9.625 19.0938 10.5625 18.375 11.4688L17.9688 11.1875C18.6875 10.2812 19.1562 9.375 19.4375 8.71875C19.5 8.59375 19.5 8.4375 19.4375 8.3125C19 7.25 18.0625 5.6875 16.6562 4.40625C15.25 3.09375 13.3438 2 10.9688 2C9.65625 2 8.5 2.34375 7.46875 2.875L7.03125 2.53125C8.15625 1.90625 9.5 1.5 11 1.5C13.5 1.5 15.5312 2.65625 17 4.03125C18.4688 5.375 19.4375 7 19.9062 8.125C20 8.375 20 8.65625 19.9062 8.90625ZM3.59375 5.53125L4 5.84375C3.3125 6.75 2.8125 7.625 2.53125 8.3125C2.46875 8.4375 2.46875 8.59375 2.53125 8.71875C2.96875 9.75 3.90625 11.3125 5.3125 12.625C6.71875 13.9375 8.625 15 11 15C12.3125 15 13.4688 14.6875 14.5 14.1562L14.9375 14.5C13.8125 15.125 12.4688 15.5 10.9688 15.5C8.46875 15.5 6.4375 14.375 4.96875 13C3.5 11.625 2.53125 10 2.0625 8.90625C1.96875 8.65625 1.96875 8.375 2.0625 8.125C2.375 7.40625 2.875 6.46875 3.59375 5.53125ZM7.5 8.625L8.03125 9.0625C8.28125 10.4375 9.5 11.5 11 11.5C11.0312 11.5 11.0938 11.5 11.1562 11.5L11.6875 11.9375C11.4688 12 11.2188 12 11 12C9.09375 12 7.53125 10.5 7.5 8.625ZM10.9688 5C12.875 5 14.4375 6.53125 14.4688 8.40625L13.9375 7.96875C13.6875 6.5625 12.4688 5.5 10.9688 5.5C10.9375 5.5 10.875 5.5 10.8125 5.53125L10.2812 5.09375C10.5 5.03125 10.75 5 10.9688 5Z"
                            fill="black"
                        />
                    </svg>
                )
            ) : null}
        </div>
    );
};

export default Field;
