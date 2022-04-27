import React, { useEffect } from "react";

//Components
import Header from "@components/Header";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

//Style
import "./AuthLayout.scss";

const AuthLayout = ({ children, ...props }) => {
    const { rename } = usePageTitle();

    useEffect(() => {
        rename(props.title);
    }, []);

    return (
        <div className="authlayout">
            <Header />

            <div className="authlayout__content">
                <div className="authlayout__content__block">{children}</div>
                <div className="authlayout__content__beautyblock"></div>
            </div>

            <div className="authlayout__footer"></div>
        </div>
    );
};

export default AuthLayout;
