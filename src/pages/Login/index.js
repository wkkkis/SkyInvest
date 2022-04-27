import React from "react";

//Components
import LoginForm from "@components/LoginForm";

const Login = () => {
    const fetchLoginData = (data) => {
        console.log(data);
    };

    return (
        <div className="main">
            <div className="main__content">
                <LoginForm />
            </div>
            <div className="main__footer"></div>
        </div>
    );
};

export default Login;
