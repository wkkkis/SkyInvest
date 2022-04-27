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
import Login from "@pages/Login";
import Signin from "@pages/Signin";

// utils
import { router } from "@utils/router";

//Layouts
import MainLayout from "@layouts/MainLayout";
import AuthLayout from "@layouts/AuthLayout";

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
    {
        url: router.login,
        component: Login,
        layout: "auth",
        title: "Авторизация",
    },
    {
        url: router.signin,
        component: Signin,
        layout: "auth",
        title: "Авторизация",
    },
    {},
];

const AppRoutes = () => {
    return (
        <Routes>
            {allRoutes.map((route) => {
                let routeInner;
                let props = route;

                switch (route.layout) {
                    case "main":
                        routeInner = (
                            <MainLayout {...props}>
                                <route.component />
                            </MainLayout>
                        );
                        break;
                    case "auth":
                        routeInner = (
                            <AuthLayout {...props}>
                                <route.component />
                            </AuthLayout>
                        );
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
