import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

//Components
import MenuToggle from "@components/MenuToggle";
import UserInfoBlock from "@components/UI/UserInfoBlock";

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
                              transitionDuration: "0.5s",
                          }
                        : {
                              translateY: "0%",
                              top: "-600px",
                              left: "0",
                              opacity: 0,
                              transitionDelay: "0.3s",
                              transitionDuration: "0.5s",
                          }
                }
                transition={{ type: "spring", duration: 0.05 }}
            >
                <div className="hamburger_menu__container__nav_links">
                    {user ? (
                        <UserInfoBlock
                            onClick={() => navigate(router.dashboard)}
                            order={true}
                            email={user.email}
                            name={`${user.first_name} ${user.last_name}`}
                            logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
                        />
                    ) : null}
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
