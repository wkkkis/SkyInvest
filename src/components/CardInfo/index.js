import React from "react";

//Icons
import userlogo from "@assets/img/userlogo.svg";

//Styles
import "./CardInfo.scss";
import UserInfoBlock from "../UI/UserInfoBlock";

const CardInfo = ({ children, name, email, rating, logo, className }) => {
    return (
        <div className={`cardinfo ${className}`}>
            <div className="cardinfo__header">
                <UserInfoBlock name={name} email={email} logo={logo} />
                <div className="cardinfo__header__rating">
                    <img src={userlogo} alt="userlogo" />
                    <span>{rating}</span>
                </div>
            </div>
            <div
                className={`cardinfo__content ${
                    className && className + "__content"
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default CardInfo;
