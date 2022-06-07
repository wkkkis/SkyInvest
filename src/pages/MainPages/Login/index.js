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

const Login = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
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
        setError("");
    };

    useEffect(() => {
        dispatch(authActions.message(""));
    }, []);

    useEffect(() => {
        if (messages) {
            setError(true);
        }
    }, [messages]);

    return (
        <div className="main_auth">
            {error && messages
                ? Object.values(messages).map((e) => (
                      <MessageBox
                          message={e[0]}
                          onChange={(e) => setError(e)}
                          error={true}
                      />
                  ))
                : null}
            <div className="main_auth__content">
                <LoginForm fetchData={fetchLoginData} loaded={loaded} />
                <img src={back} alt="" />
            </div>
            {messages?.message &&
                messages?.message[0] === "Введите код Google authenticator" && (
                    <TwoFACode handleChange={handleOtp} />
                )}
            <Footer />
        </div>
    );
};

export default Login;
