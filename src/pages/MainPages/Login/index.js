import React, { useEffect, useState } from "react";

//Components
import { LoginForm } from "@components/Forms";
import Footer from "@components/Footer";

//Icons
import back from "@assets/img/authbackground.jpg";

//Styles
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import TwoFACode from "../../../components/Modals/TwoFACode";
import MessageBox from "../../../components/MessageBox";
import { authActions, login } from "../../../store/auth/auth.api";
import { groupActions } from "../../../store/group/group.api";

const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState("");
    const [code, setCode] = useState("");
    const { messages, loaded } = useSelector((state) => state.auth);

    const fetchLoginData = (data) => {
        setData(data);
        dispatch(login(data));
    };

    const handleOtp = (token) => {
        setCode(token);
        const obj = {
            ...data,
            two_fa_otp: token,
        };
        dispatch(login(obj));
    };

    useEffect(() => {
        dispatch(groupActions.message(""));
        dispatch(authActions.message(""));
        dispatch(authActions.complete(""));
    }, []);

    return (
        <div className="main_auth">
            <div className="main_auth__content">
                <LoginForm fetchData={fetchLoginData} loaded={loaded} />
                <img src={back} alt="" />
            </div>
            {messages?.message?.length &&
                messages?.message[0][0] ===
                    "Введите код Google authenticator" && (
                    <TwoFACode handleChange={handleOtp} />
                )}
            <Footer />
        </div>
    );
};

export default Login;
