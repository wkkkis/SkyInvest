import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

//Components
import {
    HistoryCash,
    HistoryGroup,
    HistoryGroupCash,
    HistoryPayment,
    HistoryTradeCash,
    HistoryTradeCopy,
    SideBar,
} from "@components/HistoryComponents";
import NotFound from "@components/NotFound";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

//Style
import "./HistoryLayout.scss";

const allRoutes = [
    {
        component: HistoryCash,
        type: "cash",
        title: "Вывод",
    },
    {
        component: HistoryGroup,
        type: "group",
        title: "Групп",
    },
    {
        component: HistoryGroupCash,
        type: "group-cash",
        title: "Доходы с групп",
    },
    {
        component: HistoryTradeCopy,
        type: "trade-copy",
        title: "Копирование",
    },
    {
        component: HistoryTradeCash,
        type: "trade-cash",
        title: "Доходы копирования",
    },
    {
        component: HistoryPayment,
        type: "payment",
        title: "Пополнение",
    },
];

const HistoryLayout = ({ children, ...props }) => {
    const location = useLocation();
    const { rename } = usePageTitle();
    const [searchParams, setSearchParams] = useSearchParams();
    const [render, setRenderBlock] = useState();
    const [blockrender, setBlockrender] = useState();
    const [sidebar, setSidebar] = useState();

    useEffect(() => {
        rightRender();
    }, [location.search]);

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            rightRender();
        });
    }, []);

    const rightRender = () => {
        if (document.body.offsetWidth >= 700) {
            setSidebar(true);
            setBlockrender(true);
            if (!location.search) {
                setSearchParams({ type: "payment" });
                renderBlock("cash");
            }
        } else {
            if (!location.search) {
                setSidebar(true);
                setBlockrender(false);
            } else {
                setSidebar(false);
                setBlockrender(true);
            }
        }
        renderBlock(searchParams.get("type"));
    };

    const renderBlock = (type) => {
        const res = allRoutes.filter((e) => e.type === type)[0];
        if (res) {
            props.setGetTitle(res.title);
            rename(`История операции | ${res.title}`);
            setRenderBlock(<res.component />);
        } else {
            setRenderBlock(null);
        }
    };

    return (
        <div className="historylayout">
            {sidebar ? <SideBar /> : null}

            {blockrender ? (
                <div className="historylayout__content">{render}</div>
            ) : null}
        </div>
    );
};

export default HistoryLayout;
