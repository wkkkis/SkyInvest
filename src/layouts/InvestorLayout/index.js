import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

//Components
import Header from "@components/Header";
import Sidebar from "@components/InvestorComponents/SideBar";
import SidebarTraider from "@components/TraiderComponents/SideBar";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

//Style
import "./InvestorLayout.scss";
import { useSelector } from "react-redux";
import router from "../../utils/router";

const InvestorLayout = ({ children, ...props }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, isTraider } = useSelector((state) => state.user);

    const { rename } = usePageTitle();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!user && !token) {
            navigate(router.login);
        }
    }, [user]);

    useEffect(() => {
        rename(props.title);
    }, [document.title]);

    return (
        <div className="investorlayout">
            <Header />

            <div className="investorlayout__group">
                {isTraider ? <SidebarTraider /> : <Sidebar />}

                <div className="investorlayout__group__content">{children}</div>
            </div>
        </div>
    );
};

export default InvestorLayout;
