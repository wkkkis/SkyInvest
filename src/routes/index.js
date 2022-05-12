import React from "react";
import { Routes, Route } from "react-router-dom";

//Routes
import { allRoutes } from "./DataRoutes";

//Layouts
import MainLayout from "@layouts/MainLayout";
import InvestorLayout from "@layouts/InvestorLayout";
import AuthLayout from "@layouts/AuthLayout";

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
                    case "investor":
                        routeInner = (
                            <InvestorLayout {...props}>
                                <route.component />
                            </InvestorLayout>
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
