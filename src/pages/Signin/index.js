import React from "react";

//Form
import { SigninForm } from "@components/Forms";
import Footer from "@components/Footer";

//Icons
import back from "@assets/img/authbackground.jpg";

const Signin = () => {
    return (
        <div className="main_auth">
            <div className="main_auth__content">
                <SigninForm />
                <img src={back} alt="" />
            </div>

            <Footer />
        </div>
    );
};

export default Signin;
