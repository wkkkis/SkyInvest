import React, { useEffect, useState } from "react";

//Components
import { LoginForm } from "@components/Forms";
import Footer from "@components/Footer";

//Icons
import back from "@assets/img/authbackground.jpg";

//Styles
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/user/user.api";

const Login = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const { messages } = useSelector((state) => state.user);

    const fetchLoginData = (data) => {
        dispatch(login(data));
    };

    useEffect(() => {
        if (messages === "error_login") {
            setError(true);
        } else {
            setError(false);
        }
    }, [messages]);

    return (
        <div className="main_auth">
            <div className="main_auth__content">
                <LoginForm fetchData={fetchLoginData} error={error} />
                <img src={back} alt="" />
            </div>

            <Footer />
        </div>
    );
};

export default Login;
