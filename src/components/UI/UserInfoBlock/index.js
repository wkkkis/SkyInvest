import React from "react";

//Icons
import logout from "@assets/img/logout.svg";

//Styles
import "./UserInfoBlock.scss";

const UserInfoBlock = ({
    logo = "",
    onClick = "",
    isLogout = false,
    name,
    email,
    className,
}) => {
    return (
        <div className={`userinfoblock ${className}`} onClick={onClick}>
            <div className="userinfoblock__information">
                <img src={logo} alt="logo" />
                <div className="userinfoblock__information__desc">
                    <span>{name}</span>
                    <p>{email}</p>
                </div>
            </div>
            {isLogout ? (
                <div className="userinfoblock__logout">
                    <img src={logout} alt="logout" />
                </div>
            ) : null}
        </div>
    );
};

export default UserInfoBlock;
