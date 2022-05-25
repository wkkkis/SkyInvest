import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

//Components
import Header from "@components/Header";
import Sidebar from "@components/InvestorComponents/SideBar";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

//Style
import "./InvestorLayout.scss";
import { useSelector } from "react-redux";
import router from "../../utils/router";

const InvestorLayout = ({ children, ...props }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);

    const { rename } = usePageTitle();

    useEffect(() => {
        if (!user) {
            navigate(router.login);
        }
    }, [user]);

    useEffect(() => {
        rename(props.title);
    }, [document.title]);

    useEffect(() => {
        if (document.body.offsetWidth <= 700) {
            document.addEventListener("click", (e) => {
                if (e.target.classList[0] === "main__header__title__back") {
                    navigate("/investor");
                }
            });
        } else if (location.pathname === "/investor") {
            navigate(-1);
        }
    }, [location.search]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (document.body.offsetWidth <= 700) {
                document.addEventListener("click", (e) => {
                    if (e.target.classList[0] === "main__header__title__back") {
                        navigate("/investor");
                    }
                });
            } else if (location.pathname === "/investor") {
                navigate(-1);
            }
        });
    }, []);

    return (
        <div className="investorlayout">
            <Header />

            <div className="investorlayout__group">
                <Sidebar />

                <div className="investorlayout__group__content">{children}</div>
            </div>
        </div>
    );
};

export default InvestorLayout;
