import React from "react";

//Icons
import userlogo from "@assets/img/userlogo.svg";

//Styles
import "./CardInfo.scss";
import UserInfoBlock from "../UI/UserInfoBlock";

const CardInfo = ({
    children,
    name,
    email,
    rating,
    result = "",
    logo,
    className,
    onClick,
    end = false,
    id,
}) => {
    return (
        <div className={`cardinfo ${className}`}>
            {end && (
                <div className={`cardinfo__status`}>
                    <span>Группа заполнена</span>
                </div>
            )}
            <div className="cardinfo__header">
                <UserInfoBlock
                    name={name}
                    email={email}
                    logo={logo}
                    onClick={onClick}
                    id={id}
                />
                {rating ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div className="cardinfo__header__rating">
                            <img src={userlogo} alt="userlogo" />
                            <span>{rating}</span>
                        </div>
                        {result && (
                            <div className="cardinfo__header__rating">
                                <span>+ {result} %</span>
                            </div>
                        )}
                    </div>
                ) : null}
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
