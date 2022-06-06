import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { messageClean } from "../../store/group/group.api";

//Styles
import "./MessageBox.scss";

const MessageBox = ({ message, error, onChange }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        onChange(false);
        dispatch(messageClean());
    };

    useEffect(() => {
        setTimeout(() => {
            onChange(false);
            dispatch(messageClean());
        }, 3000);
    }, []);

    return (
        <div className={`messagebox ${error ? "error" : "complete"}`}>
            <div className="messagebox__box">
                <span>{message}</span>
                <svg
                    onClick={handleClick}
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                >
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                </svg>
            </div>
        </div>
    );
};

export default MessageBox;
