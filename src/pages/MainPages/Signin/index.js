import React, { useEffect } from "react";

//Form
import { SigninForm } from "@components/Forms";
import Footer from "@components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

//Icons
import back from "@assets/img/authbackground.jpg";
import { regiter } from "../../../store/auth/auth.api";

//Functions

const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, messages, isAuth } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [user, messages, navigate, dispatch]);

    const signinhandler = (data) => {
        dispatch(regiter(data));
    };

    return (
        <div className="main_auth">
            <div className="main_auth__content">
                <SigninForm fetchData={signinhandler} />
                <img src={back} alt="" />
            </div>

            <Footer />
        </div>
    );
};

export default Signin;
