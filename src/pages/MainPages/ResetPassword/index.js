import React from "react";

//Components
import { ResetPasswordForm } from "@components/Forms";
import Footer from "@components/Footer";

//Icons
import back from "@assets/img/authbackground.jpg";

//Styles
import "./ResetPassword.scss";

const ResetPassword = () => {
    return (
        <div className="main_auth">
            <div className="main_auth__content">
                <ResetPasswordForm />
                <img src={back} alt="" />
            </div>

            <Footer />
        </div>
    );
};

export default ResetPassword;
