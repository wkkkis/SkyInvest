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
import TwoFACode from "../../../components/Modals/TwoFACode";

const Login = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [data, setData] = useState("");
    const [code, setCode] = useState("");
    const { messages } = useSelector((state) => state.user);

    const fetchLoginData = (data) => {
        setData(data);
        dispatch(login(data));
    };

    const handleOtp = (token) => {
        setCode(token);
        const obj = {
            ...data,
            two_fa_otp: code,
        };
        dispatch(login(obj));
        setError("");
    };

    useEffect(() => {
        console.log(messages);
        if (messages === "error_login") {
            setError("error_login");
        } else {
            setError("");
        }

        if (messages === "2fa_error") {
            setError("2fa_error");
        }

        if (messages === "Unable to log in with provided credentials.") {
            setError("error_login");
        }
    }, [messages]);

    return (
        <div className="main_auth">
            <div className="main_auth__content">
                <LoginForm fetchData={fetchLoginData} error={error} />
                <img src={back} alt="" />
            </div>
            {error && <TwoFACode handleChange={handleOtp} />}
            <Footer />
        </div>
    );
};

export default Login;
