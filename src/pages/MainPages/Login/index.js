import React from "react";

//Components
import { LoginForm } from "@components/Forms";
import Footer from "@components/Footer";

//Icons
import back from "@assets/img/authbackground.jpg";

//Styles
import "./Login.scss";

const Login = () => {
    const fetchLoginData = (data) => {
        console.log(data);
    };

    return (
        <div className="main_auth">
            <div className="main_auth__content">
                <LoginForm />
                <img src={back} alt="" />
            </div>

            <Footer />
        </div>
    );
};

export default Login;
