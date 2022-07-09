import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

//Components
import MenuToggle from "@components/MenuToggle";
import UserInfoBlock from "@components/UI/UserInfoBlock";
import Button from "@components/Button";

//Router
import router from "@utils/router";

//Icons
import plus from "@assets/img/plus.svg";
import arrow from "@assets/img/selectArrow.svg";

//Styles
import "./DropMenu.scss";

const headerRoutes = [
    {
        url: router.main,
        title: "Главная",
    },
    {
        url: router.about,
        title: "О компании",
    },
    {
        url: router.trade_group,
        title: "Трейд групп",
    },
    {
        url: router.copy_trade,
        title: "Копи Трейд",
    },
    {
        url: router.faq,
        title: "Вопросы и ответы",
    },
    {
        url: router.contacts,
        title: "Контакты",
    },
];

const DropMenu = ({ user }) => {
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="hamburger_menu">
            <div className="hamburger_menu__btn">
                <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
            </div>
            <motion.div
                className="hamburger_menu__container"
                initial={false}
                animate={
                    isOpen
                        ? {
                              translateY: "100%",
                              top: "0",
                              left: "0",
                              opacity: 1,
                              transitionDelay: "0.3s",
                              transitionDuration: "0.2s",
                          }
                        : {
                              translateY: "0%",
                              top: "-600px",
                              left: "0",
                              opacity: 0,
                              transitionDelay: "0.1s",
                              transitionDuration: "0.1s",
                          }
                }
                transition={{ type: "spring", duration: 0.05 }}
            >
                <div className="hamburger_menu__container__nav_links">
                    {user ? (
                        <UserInfoBlock
                            order={true}
                            email={user.email}
                            name={`${user.first_name} ${user.last_name}`}
                            onClick={() => navigate(router.dashboard)}
                            logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
                        />
                    ) : (
                        <Button
                            theme="beforesubmit"
                            onClick={() => navigate(router.login)}
                        >
                            Войти / Зарегистрироваться
                            <svg
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 0.75C3.11719 0.75 0 3.89453 0 7.75C0 11.6328 3.11719 14.75 7 14.75C10.8555 14.75 14 11.6328 14 7.75C14 3.89453 10.8555 0.75 7 0.75ZM7 4.25C8.06641 4.25 8.96875 5.15234 8.96875 6.21875C8.96875 7.3125 8.06641 8.1875 7 8.1875C5.90625 8.1875 5.03125 7.3125 5.03125 6.21875C5.03125 5.15234 5.90625 4.25 7 4.25ZM7 13C5.55078 13 4.23828 12.4258 3.28125 11.4688C3.71875 10.3203 4.8125 9.5 6.125 9.5H7.875C9.16016 9.5 10.2539 10.3203 10.6914 11.4688C9.73438 12.4258 8.42188 13 7 13Z"
                                    fill="#FDFDFE"
                                />
                            </svg>
                        </Button>
                    )}
                    {headerRoutes.map(({ url, title }) => (
                        <NavLink
                            onClick={toggleMenu}
                            key={url + "_key"}
                            to={url}
                        >
                            <img src={arrow} alt="arrow" />
                            <img src={plus} alt="plus" />

                            {title}
                        </NavLink>
                    ))}
                    <div className="hamburger_menu__container__nav_links__theme"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default DropMenu;
