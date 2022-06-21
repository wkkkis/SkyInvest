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
import { authActions, regiter } from "../../../store/auth/auth.api";
import router from "../../../utils/router";
import { groupActions } from "../../../store/group/group.api";

const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(false);

    const { isAuth } = useSelector((state) => state.user);
    const { loaded, complete, messages } = useSelector((state) => state.auth);

    useEffect(() => {
        if (complete === "register_success") {
            setCompleted(true);
        }
    }, [isAuth, messages, complete]);

    const signinhandler = (data) => {
        dispatch(regiter(data));
    };

    useEffect(() => {
        dispatch(groupActions.message(""));
        dispatch(authActions.message(""));
        dispatch(authActions.complete(""));
    }, []);

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
                <CompletedModal
                    handleChange={() => {
                        setCompleted(false);
                        navigate(router.login);
                    }}
                />
            ) : null}

            <Footer />
        </div>
    );
};

export default Signin;
