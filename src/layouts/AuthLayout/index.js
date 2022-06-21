import React, { useEffect } from "react";

//Components
import Header from "@components/Header";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

//Style
import "./AuthLayout.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import router from "../../utils/router";
import MessageBox from "../../components/MessageBox";
import { groupActions } from "../../store/group/group.api";

const AuthLayout = ({ children, ...props }) => {
    const { rename } = usePageTitle();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { isAuth, messages, complete } = useSelector((state) => state.auth);

    useEffect(() => {
        rename(props.title);
    }, []);

    useEffect(() => {
        if (isAuth || user) {
            navigate(router.dashboard);
        }
    }, [isAuth, user]);

    return (
        <div className="authlayout">
            <Header />
            {messages
                ? Object.values(messages).map((e) => (
                      <MessageBox message={e} error={true} />
                  ))
                : null}
            <div className="authlayout__content">
                <div className="authlayout__content__block">{children}</div>
                <div className="authlayout__content__beautyblock"></div>
            </div>
        </div>
    );
};

export default AuthLayout;
