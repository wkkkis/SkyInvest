import React from "react";

//Components
import { NewPassword } from "@components/Forms";
import Footer from "@components/Footer";

//Icons
import back from "@assets/img/authbackground.jpg";

//Styles
import "./ConfirmPassword.scss";

const ConfirmPassword = () => {
    return (
        <div className="main_auth">
            <div className="main_auth__content">
                <NewPassword />
                <img src={back} alt="" />
            </div>

            <Footer />
        </div>
    );
};

export default ConfirmPassword;
