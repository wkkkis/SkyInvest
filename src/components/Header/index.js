import React from "react";

//Image
import logo from "../../assets/img/logo.svg";

//Style
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;
