import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Visible } from "@assets/img/visibility.svg";
import TextareaAutosize from "react-textarea-autosize";

//Styles
import "./Field.scss";

const Field = ({
    placeholder,
    label,
    onClick,
    onFocus,
    value,
    onChange,
    name,
    classNames,
    defaultValue = "",
    error = "",
    type,
    autoFocus,
    area = false,
    ...props
}) => {
    const ref = useRef();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const changeType = () => {
        setPasswordVisible(!passwordVisible);
    };

    const checkType = () => {
        if (!passwordVisible && type === "password") {
            return "password";
        } else if (type === "user_count") {
            return "number";
        } else if (type === "money") {
            return "number";
        } else if (type === "date") {
            return "text";
        } else if (type === "number") {
            return "number";
        } else if (type === "email") {
            return "email";
        } else if (type === "usd") {
            return "number";
        } else {
            return "text";
        }
    };

    return (
        <div className={`field ${type} ${classNames}`}>
            <label>{label}</label>
            {!area ? (
                <input
                    name={name}
                    ref={ref}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    type={checkType()}
                    onClick={onClick}
                    onFocus={onFocus}
                    onChange={onChange}
                    autoFocus={autoFocus}
                    value={value}
                    {...props}
                />
            ) : (
                <TextareaAutosize
                    name={name}
                    ref={ref}
                    elastic
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    type={checkType()}
                    onClick={onClick}
                    onFocus={onFocus}
                    onChange={onChange}
                    value={value}
                    {...props}
                />
            )}
            <span>{error}</span>
            {type === "password" ? (
                passwordVisible ? (
                    <Visible
                        onClick={changeType}
                        width="22"
                        height="18"
                        className="password_visible"
                    />
                ) : (
                    <svg
                        onClick={changeType}
                        width="22"
                        height="17"
                        className="password_visible"
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
            ) : type === "date" ? (
                <svg
                    onClick={onFocus}
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M3 1.625C3 1.16016 3.38281 0.75 3.875 0.75C4.33984 0.75 4.75 1.16016 4.75 1.625V2.5H8.25V1.625C8.25 1.16016 8.63281 0.75 9.125 0.75C9.58984 0.75 10 1.16016 10 1.625V2.5H11.3125C12.0234 2.5 12.625 3.10156 12.625 3.8125V5.125H0.375V3.8125C0.375 3.10156 0.949219 2.5 1.6875 2.5H3V1.625ZM12.625 13.4375C12.625 14.1758 12.0234 14.75 11.3125 14.75H1.6875C0.949219 14.75 0.375 14.1758 0.375 13.4375V6H12.625V13.4375Z"
                        fill="#0D121F"
                    />
                </svg>
            ) : type === "user_count" ? (
                <svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 8.5C9.1875 8.5 11 6.71875 11 4.5C11 2.3125 9.1875 0.5 7 0.5C4.78125 0.5 3 2.3125 3 4.5C3 6.71875 4.78125 8.5 7 8.5ZM7 1C8.90625 1 10.5 2.59375 10.5 4.5C10.5 6.4375 8.90625 8 7 8C5.0625 8 3.5 6.4375 3.5 4.5C3.5 2.59375 5.0625 1 7 1ZM8.5625 10H5.40625C2.40625 10 0 12.4375 0 15.4375C0 16.0312 0.46875 16.5 1.0625 16.5H12.9062C13.5 16.5 14 16.0312 14 15.4375C14 12.4375 11.5625 10 8.5625 10ZM12.9062 16H1.0625C0.75 16 0.5 15.75 0.5 15.4375C0.5 12.7188 2.6875 10.5 5.40625 10.5H8.5625C11.2812 10.5 13.5 12.7188 13.5 15.4375C13.5 15.75 13.2188 16 12.9062 16Z"
                        fill="black"
                    />
                </svg>
            ) : type === "money" ? (
                <div className="field__money">
                    <span>USDT</span>
                </div>
            ) : type === "usd" ? (
                <div className="field__money">
                    <span>USD</span>
                </div>
            ) : null}
        </div>
    );
};

export default Field;
