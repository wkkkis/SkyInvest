const router = {
    dashboard: "/dashboard",
    groups: "/groups",
    mycopy: "/mycopy",
    payment: "/payments",
    cash: "/cash",
    history: "/history",
    history_cash: "/history?type=cash",
    history_group: "/history?type=group",
    history_cash_group: "/history?type=group-cash",
    history_copy_trade: "/history?type=trade-copy",
    history_cash_trade: "/history?type=trade-cash",
    history_payment: "/history?type=payment",
    security: "/security",
    profile: "/profile",
    profile_edit: "/profile?type=user-info",
    profile_password: "/profile?type=password",
    login: "/login",
    signin: "/signin",
    reset_password: "/reset-password",
    confirm_password: "/confirm-password",
    main: "/",
    about: "/about",
    trade_group: "/trade-group",
    copy_trade: "/copy-trade",
    faq: "/faq",
    contacts: "/contacts",
    investor_page: "/investor",
};

export default router;

export const router_new = {
    userpages: {
        user: "/user/:",
    },
    investor: {
        dashboard: "/investor/dashboard",
        groups: "/investor/groups",
        mycopy: "/investor/mycopy",
        payment: "/investor/payments",
        cash: "/investor/cash",
        history: "/investor/history",
        history_cash: "/investor/history?type=cash",
        history_group: "/investor/history?type=group",
        history_cash_group: "/investor/history?type=group-cash",
        history_copy_trade: "/investor/history?type=trade-copy",
        history_cash_trade: "/investor/history?type=trade-cash",
        history_payment: "/investor/history?type=payment",
        security: "/investor/security",
        profile: "/investor/profile",
        profile_edit: "/investor/profile?type=user-info",
        profile_password: "/investor/profile?type=password",
        investor_page: "/investor",
    },
    main: {
        login: "/login",
        signin: "/signin",
        reset_password: "/reset-password",
        confirm_password: "/confirm-password",
        main: "/",
        about: "/about",
        trade_group: "/trade-group",
        copy_trade: "/copy-trade",
        faq: "/faq",
        contacts: "/contacts",
    },
    traider: {
        dashboard: "/traider/dashboard",
        groups: "/traider/groups",
        mycopy: "/traider/mycopy",
        payment: "/traider/payments",
        cash: "/traider/cash",
        history: "/traider/history",
        history_cash: "/traider/history?type=cash",
        history_group: "/traider/history?type=group",
        history_cash_group: "/traider/history?type=group-cash",
        history_copy_trade: "/traider/history?type=trade-copy",
        history_cash_trade: "/traider/history?type=trade-cash",
        history_payment: "/traider/history?type=payment",
        security: "/traider/security",
        verify: "/traider/verification",
        profile: "/traider/profile",
        profile_edit: "/traider/profile?type=user-info",
        profile_password: "/traider/profile?type=password",
        copy_settings: "/traider/copy-settings",
        investor_page: "/traider",
    },
};
