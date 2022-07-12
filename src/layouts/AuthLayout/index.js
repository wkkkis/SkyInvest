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
    const { user, isTraider } = useSelector((state) => state.user);
    const { isAuth, messages, complete } = useSelector((state) => state.auth);

    useEffect(() => {
        rename(props.title);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (isAuth && user) {
                if (window.innerWidth < 600) {
                    if (user.is_trader) {
                        navigate(router.traider_page);
                    } else {
                        navigate(router.investor_page);
                    }
                } else {
                    navigate(router.dashboard);
                }
            }
        }, 0.5);
    }, [isAuth, user]);

    return (
        <div className="authlayout">
            <Header />
            {messages && messages !== "reset_success"
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
