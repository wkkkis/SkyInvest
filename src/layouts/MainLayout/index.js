import React, { useEffect } from "react";

//Components
import Header from "@components/Header";
import Sidebar from "@components/SideBar";

//Router
import AppRoutes from "../../routes";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

//Style
import "./MainLayout.scss";

const MainLayout = ({ children, ...props }) => {
    const { rename } = usePageTitle();

    useEffect(() => {
        rename(props.title);
    }, []);

    return (
        <div className="mainlayout">
            <Header />

            <div className="mainlayout__group">
                <Sidebar />

                <div className="mainlayout__group__content">{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
