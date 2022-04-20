import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import DashBoard from "@pages/DashBoard";
import Profile from "@pages/Profile";
import Groups from "@pages/Groups";
import Cash from "@pages/Cash";
import History from "@pages/History";
import Payments from "@pages/Payments";
import MyCopy from "@pages/MyCopy";
import Security from "@pages/Security";

// utils
import { router } from "@utils/router";

const allRoutes = [
    {
        url: router.dashboard,
        component: DashBoard,
        layout: "main",
        title: "DashBoard",
    },
    {
        url: router.groups,
        component: Groups,
        layout: "main",
        title: "Мои группы",
    },
    {
        url: router.mycopy,
        component: MyCopy,
        layout: "main",
        title: "Мои копирования",
    },
    {
        url: router.payment,
        component: Payments,
        layout: "main",
        title: "Пополнение",
    },
    {
        url: router.cash,
        component: Cash,
        layout: "main",
        title: "Вывод",
    },
    {
        url: router.history,
        component: History,
        layout: "main",
        title: "История операции",
    },
    {
        url: router.security,
        component: Security,
        layout: "main",
        title: "Безопастность",
    },
    {
        url: router.profile,
        component: Profile,
        layout: "main",
        title: "Прафиль",
    },
];

const AppRoutes = () => {
    return (
        <Routes>
            {allRoutes.map((route) => {
                let routeInner;

                switch (route.layout) {
                    case "main":
                        routeInner = <route.component {...route} />;
                        break;
                    default:
                        break;
                }

                return (
                    <Route
                        path={route.url}
                        key={route.url}
                        element={routeInner}
                    />
                );
            })}
        </Routes>
    );
};

export default AppRoutes;
