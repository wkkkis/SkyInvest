import React, { useEffect, useState } from "react";

//Form
import { SigninForm } from "@components/Forms";
import Footer from "@components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

//Icons
import back from "@assets/img/authbackground.jpg";

//Functions
import CompletedModal from "../../../components/Modals/CompletedModal";
import MessageBox from "../../../components/MessageBox";
import { regiter } from "../../../store/auth/auth.api";

const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [completed, setCompleted] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const { isAuth, messages } = useSelector((state) => state.user);

    useEffect(() => {
        if (messages === "register_success") {
            setCompleted(true);
            setLoaded(!loaded);
        }
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth, messages, navigate, dispatch]);

    const signinhandler = (data) => {
        setLoaded(true);
        dispatch(regiter(data));
    };

    useEffect(() => {
        if (messages) {
            setLoaded(false);
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
                <SigninForm fetchData={signinhandler} loaded={loaded} />
                <img src={back} alt="" />
            </div>
            {completed ? (
                <CompletedModal handleChange={() => setCompleted(false)} />
            ) : null}

            <Footer />
        </div>
    );
};

export default Signin;
