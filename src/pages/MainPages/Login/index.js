import React from "react";

//Components
import { LoginForm } from "@components/Forms";
import Footer from "@components/Footer";

//Icons
import back from "@assets/img/authbackground.jpg";

//Styles
import "./Login.scss";
import { useDispatch } from "react-redux";
import { login } from "../../../store/user/user.api";

const Login = () => {
    const dispatch = useDispatch();

    const fetchLoginData = (data) => {
        dispatch(login(data));
    };

    return (
        <div className="main_auth">
            <div className="main_auth__content">
                <LoginForm fetchData={fetchLoginData} />
                <img src={back} alt="" />
            </div>

            <Footer />
        </div>
    );
};

export default Login;
