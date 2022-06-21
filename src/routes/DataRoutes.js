import React from "react";

//Traider

//404
import Page404 from "@pages/404";

// utils
import router from "@utils/router";

// pages

//Investor
const DashBoard = React.lazy(() => import("@pages/DashBoard"));
const Profile = React.lazy(() => import("@pages/Profile"));
const Groups = React.lazy(() => import("@pages/Groups"));
const Group = React.lazy(() => import("@pages/Group"));
const Cash = React.lazy(() => import("@pages/Cash"));
const History = React.lazy(() => import("@pages/History"));
const MyCopy = React.lazy(() => import("@pages/MyCopy"));
const Security = React.lazy(() => import("@pages/Security"));
const Investor = React.lazy(() => import("@pages/Investor"));
const Payments = React.lazy(() => import("@pages/Payments"));

const CopySettings = React.lazy(() => import("@pages/CopySettings"));
const Traider = React.lazy(() => import("../pages/Traider"));
const Verify = React.lazy(() => import("../pages/Verify"));
const User = React.lazy(() => import("../pages/User"));

//Auth
const Login = React.lazy(() => import("@pages/MainPages/Login"));
const Signin = React.lazy(() => import("@pages/MainPages/Signin"));
const ResetPassword = React.lazy(() =>
    import("@pages/MainPages/ResetPassword")
);
const ConfirmPassword = React.lazy(() =>
    import("@pages/MainPages/ConfirmPassword")
);
const Activation = React.lazy(() => import("@pages/MainPages/Activation"));

//Main
const Main = React.lazy(() => import("@pages/MainPages/Main"));
const About = React.lazy(() => import("@pages/MainPages/About"));
const TradeGroup = React.lazy(() => import("@pages/MainPages/TradeGroup"));
const CopyTrade = React.lazy(() => import("@pages/MainPages/CopyTrade"));
const FAQ = React.lazy(() => import("@pages/MainPages/FAQ"));
const Contacts = React.lazy(() => import("@pages/MainPages/Contacts"));

export const allRoutes = {
    investor: [
        {
            url: router.mycopy,
            component: MyCopy,
            layout: "investor",
            title: "Мои копирования",
        },
        {
            url: router.verify,
            component: Verify,
            layout: "investor",
            title: "Верификация",
        },
        {
            url: router.investor_page,
            component: Investor,
            layout: "investor",
            title: "Главная | Инвестор",
        },
    ],
    traider: [
        {
            url: router.copy_settings,
            component: CopySettings,
            layout: "investor",
            title: "Настройка копирования",
        },
        {
            url: router.verify,
            component: Verify,
            layout: "investor",
            title: "Верификация",
        },
        {
            url: router.traider_page,
            component: Traider,
            layout: "investor",
            title: "Главная | Трейдер",
        },
        {
            url: router.group,
            component: Group,
            layout: "investor",
            title: "Мои группы",
        },
    ],
    mains: [
        {
            url: router.main,
            component: Main,
            layout: "main",
            title: "Главная",
        },
        {
            url: router.about,
            component: About,
            layout: "main",
            title: "О компании",
        },
        {
            url: router.trade_group,
            component: TradeGroup,
            layout: "main",
            title: "Трейд групп",
        },
        {
            url: router.copy_trade,
            component: CopyTrade,
            layout: "main",
            title: "Копи Трейд",
        },
        {
            url: router.faq,
            component: FAQ,
            layout: "main",
            title: "Вопросы и ответы",
        },
        {
            url: router.contacts,
            component: Contacts,
            layout: "main",
            title: "Контакты",
        },
        {
            url: router.dashboard,
            component: DashBoard,
            layout: "investor",
            title: "DashBoard",
        },
        {
            url: router.groups,
            component: Groups,
            layout: "investor",
            title: "Мои группы",
        },
        {
            url: router.payment,
            component: Payments,
            layout: "investor",
            title: "Пополнение",
        },
        {
            url: router.cash,
            component: Cash,
            layout: "investor",
            title: "Вывод",
        },
        {
            url: router.history,
            component: History,
            layout: "investor",
            title: "История операции",
        },
        {
            url: router.security,
            component: Security,
            layout: "investor",
            title: "Безопастность",
        },
        {
            url: router.profile,
            component: Profile,
            layout: "investor",
            title: "Профиль",
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
        {
            url: router.reset_password,
            component: ResetPassword,
            layout: "auth",
            title: "Сброс пароля",
        },
        {
            url: router.activated,
            component: Activation,
            layout: "auth",
            title: "Активация аккаунта",
        },
        {
            url: router.confirm_password,
            component: ConfirmPassword,
            layout: "auth",
            title: "Обновление пароля",
        },
        {
            url: router.user,
            component: User,
            layout: "main",
            title: "Пользователь",
        },
    ],
};

// user
