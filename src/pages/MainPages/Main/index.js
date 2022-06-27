import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Icons
import logo from "@assets/img/logo.svg";
import slidebar from "@assets/img/slidebar.svg";
import moment from "@assets/img/moment.svg";
import instructTitle from "@assets/img/hi.svg";
import play from "@assets/img/play.svg";
import tradeIcon from "@assets/img/tradeIcon.svg";
import arrowTop from "@assets/img/arrowTop.svg";
import usdtIcon from "@assets/img/usdt.svg";
import premium from "@assets/img/premium.svg";
import groupsLogo from "@assets/img/groupsMain.svg";
import product from "@assets/img/unicy.png";
import security from "@assets/img/security.png";
import help from "@assets/img/helpproduct.png";
import lider from "@assets/img/lider.png";
import control from "@assets/img/control.svg";
import reliability from "@assets/img/reliability.svg";
import faqLogo from "@assets/img/faq.svg";

//Components
import Button from "@components/Button";
import CardInfo from "@components/CardInfo";
import InfoBlock from "@components/UI/InfoBlock";
import CryptoPick from "@components/CryptoPick";
import Footer from "@components/Footer";
import CopyTradeModal from "@components/Modals/CopyTradeModal";
import FreePlaceModal from "@components/Modals/FreePlaceModal";

//Styles
import "./Main.scss";
import { useNavigate } from "react-router";
import router from "../../../utils/router";
import Slider from "../../../components/Slider";
import YouTube from "react-youtube";
import InsideGroupModal from "../../../components/Modals/InsideGroupModal";
import InvestorGroup from "../../../components/InvestorComponents/InvestorGroup";
import { getBanner, getFaq } from "../../../store/main/main.api";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { getAllGroups } from "../../../store/group/group.api";
import SpinnerLoad from "../../../components/SpinnerLoad";

const mockData = {
    trade: [
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            copy: false,
            price: 300,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            copy: true,
            price: 300,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            copy: true,
            price: 300,
        },
    ],
};

const Main = () => {
    const navigate = useNavigate();
    const [faqTab, setFaqTab] = useState(1);
    const [groupTradeId, setGroupTradeId] = useState();
    const [copyTradeId, setCopyTradeId] = useState();
    const [freePlaceChange, setFreePlaceChange] = useState();
    const [faqQues, setFaqQues] = useState();
    const [faqAnswer, setFaqAnswer] = useState();

    const dispatch = useDispatch();
    const { bunner, faq } = useSelector((state) => state.main);
    const { groups, message, complete } = useSelector((state) => state.group);

    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const toggleFaqTab = (tab) => {
        if (faqTab === tab) {
            setFaqTab(0);
        } else {
            setFaqTab(tab);
        }
    };

    useEffect(() => {
        dispatch(getBanner());
        dispatch(getFaq());
        dispatch(getAllGroups());
    }, []);

    const handlePageClick = (event) => {
        const newOffset = event.selected;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const ques = [];
        const ans = [];
        if (faq) {
            faq?.forEach((e) => {
                ques.push({
                    id: e.id,
                    value: e.question,
                    label: e.answer,
                });
                ans.push({
                    id: e.id,
                    value: e.answer,
                });
            });

            setFaqQues(ques);
            setFaqAnswer(ans);
        }
    }, [faq]);

    return (
        <div className="main main_page">
            <Slider>
                <div className="main__intro" key="10">
                    <div className="intro-item">
                        <div className="main__intro__welcome">
                            <span>Добро пожаловать в</span>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="main__intro__content">
                            <img src={moment} alt="moment" />

                            <div className="main__intro__content__desc">
                                <p>
                                    Стратегии доверительного управления
                                    денежными средствами позволяют гибко
                                    реагировать на изменения рынка и дают больше
                                    возможностей повысить доходность вложений.
                                </p>
                                <p>
                                    Воспользуйтесь услугой доверительного
                                    управления активами, если не готовы тратить
                                    много времени на инвестирование, хотите
                                    снизить риски и добиться большей отдачи от
                                    вложений.
                                </p>
                            </div>

                            <Button
                                theme="beforesubmit"
                                onClick={() => navigate(router.dashboard)}
                            >
                                приступить к инвестированию
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="main__intro" key="15">
                    <div className="intro-item">
                        <div className="main__intro__welcome">
                            <span>Добро пожаловать в</span>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="main__intro__content">
                            <img src={moment} alt="moment" />

                            <div className="main__intro__content__desc">
                                <p>
                                    Стратегии доверительного управления
                                    денежными средствами позволяют гибко
                                    реагировать на изменения рынка и дают больше
                                    возможностей повысить доходность вложений.
                                </p>
                                <p>
                                    Воспользуйтесь услугой доверительного
                                    управления активами, если не готовы тратить
                                    много времени на инвестирование, хотите
                                    снизить риски и добиться большей отдачи от
                                    вложений.
                                </p>
                            </div>

                            <Button
                                theme="beforesubmit"
                                onClick={() => navigate(router.dashboard)}
                            >
                                приступить к инвестированию
                            </Button>
                        </div>
                    </div>
                </div>
            </Slider>

            <div className="main__content">
                <div className="main__content__instruct">
                    <div className="main__title">
                        <div className="main__title__logo">
                            <img src={instructTitle} alt="instruct" />
                        </div>
                        <div className="main__title__text">
                            <p>Можно начать</p>
                            <span>с инструкции </span>
                        </div>
                    </div>
                    <div className="main__content__instruct__block">
                        <div className="main__content__instruct__block__gide">
                            <Slider>
                                <div className="gide-item">
                                    <span>Гайд для начинающих</span>
                                    <p>
                                        Торговля фьючерсами на первый взгляд
                                        может напугать новичка сложной
                                        терминологией и запутанными схемами.
                                        Напрасно — это увлекательная и
                                        прибыльная альтернатива скучным и
                                        банальным способам заработать на
                                        сбережениях (например, банковским
                                        вкладам).
                                    </p>
                                    <p>
                                        Фьючерсы неизменно остаются интересным
                                        инвесторам инструментом благодаря
                                        многообразию стратегий и ликвидности.
                                        Тем не менее, частные инвесторы уделяют
                                        этому инструменту незаслуженно мало
                                        внимания.{" "}
                                    </p>
                                    <Button
                                        theme="beforesubmit"
                                        onClick={() =>
                                            navigate(router.dashboard)
                                        }
                                    >
                                        ИНвестировать
                                    </Button>
                                </div>
                                <div className="gide-item">
                                    <span>Гайд для начинающих</span>
                                    <p>
                                        Торговля фьючерсами на первый взгляд
                                        может напугать новичка сложной
                                        терминологией и запутанными схемами.
                                        Напрасно — это увлекательная и
                                        прибыльная альтернатива скучным и
                                        банальным способам заработать на
                                        сбережениях (например, банковским
                                        вкладам).
                                    </p>
                                    <p>
                                        Фьючерсы неизменно остаются интересным
                                        инвесторам инструментом благодаря
                                        многообразию стратегий и ликвидности.
                                        Тем не менее, частные инвесторы уделяют
                                        этому инструменту незаслуженно мало
                                        внимания.{" "}
                                    </p>
                                    <Button
                                        theme="beforesubmit"
                                        onClick={() =>
                                            navigate(router.dashboard)
                                        }
                                    >
                                        ИНвестировать
                                    </Button>
                                </div>
                            </Slider>
                        </div>
                        <YouTube
                            videoId={"U7xUWaMDF4Q"}
                            className="main__content__instruct__block__video"
                        />
                    </div>
                </div>

                <div className="main__content__traider">
                    <div className="main__title">
                        <div className="main__title__logo">
                            <img src={tradeIcon} alt="instruct" />
                        </div>
                        <div className="main__title__text">
                            <p>Список ТОП трейдеров</p>
                            <span>этой недели </span>
                        </div>
                    </div>
                    <div className="main__content__traider__desc">
                        <p>
                            Торговля фьючерсами на первый взгляд может напугать
                            новичка сложной терминологией и запутанными схемами.
                            Напрасно — это увлекательная и прибыльная
                            альтернатива скучным и банальным способам заработать
                            на сбережениях (например, банковским вкладам).
                        </p>
                    </div>
                    <div className="main__content__traider__content">
                        {mockData.trade.map((e, idx) => (
                            <CardInfo
                                key={idx + 1}
                                className="content__card"
                                name={e.name}
                                email={e.email}
                                rating={e.rating}
                                logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
                            >
                                <div className="content__card__profit">
                                    <InfoBlock
                                        label={"Уровень ROI"}
                                        value="+ 23.31 %"
                                        fontSize="12"
                                        color="green"
                                        vWeigth="700"
                                        opactityLabel
                                    />
                                    <InfoBlock
                                        label={"Профит"}
                                        value="+ 23.31 %"
                                        fontSize="12"
                                        color="green"
                                        vWeigth="700"
                                        opactityLabel
                                    />
                                    <InfoBlock
                                        label={"Уровень MDD"}
                                        value="+ 23.31 %"
                                        fontSize="12"
                                        vWeigth="700"
                                        opactityLabel
                                    />
                                </div>
                                <div className="content__card__traid_cryptobtn">
                                    <Button theme="whitebg">
                                        <img src={arrowTop} alt="arrow" />
                                        <span>Long</span>
                                    </Button>
                                    <Button theme="transparent">
                                        <img src={usdtIcon} alt="arrow" />
                                        <span>Long</span>
                                    </Button>
                                    <Button theme="whitebg">
                                        <img src={usdtIcon} alt="arrow" />
                                        <span>Long</span>
                                    </Button>
                                </div>
                                <div className="content__card__cryptobtn">
                                    <CryptoPick />
                                    <CryptoPick />
                                    <CryptoPick />
                                </div>
                                <div className="content__card__price_btn">
                                    <div className="content__card__price_btn__price">
                                        <span>Цена</span>
                                        <span>{e.price} $</span>
                                    </div>
                                    <Button
                                        onClick={() =>
                                            !e.copy
                                                ? setCopyTradeId(idx + 1)
                                                : setFreePlaceChange(idx)
                                        }
                                        theme={
                                            e.copy
                                                ? "aftersubmit"
                                                : "beforesubmit"
                                        }
                                    >
                                        {e.copy
                                            ? "Уведомить о свободном месте"
                                            : "Копировать"}
                                    </Button>
                                </div>
                            </CardInfo>
                        ))}

                        <div className="main__content__traider__content__pagination">
                            <ReactPaginate
                                className="react-paginate"
                                breakLabel="..."
                                nextLabel=">"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={5}
                                previousLabel="<"
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </div>
                </div>

                <div className="main__content__groups">
                    <div className="main__title">
                        <div className="main__title__logo">
                            <img src={groupsLogo} alt="instruct" />
                        </div>
                        <div className="main__title__text">
                            <p>У нас есть</p>
                            <span>открытые группы </span>
                        </div>
                    </div>
                    <div className="main__content__groups__desc">
                        <p>
                            Sky Invest занимается брокерской/дилерской
                            деятельностью на более 150 рынках по всему миру. В
                            качестве брокера Sky Invest предоставляет
                            институционным и профессиональным трейдерам прямой
                            доступ к ("онлайн")
                        </p>
                    </div>
                    <div className="main__content__groups__content">
                        {groups ? (
                            groups.length ? (
                                groups.map((e, idx) => (
                                    <InvestorGroup
                                        className={
                                            "main__content__groups__content__card"
                                        }
                                        key={idx}
                                        e={e}
                                        clean_group={true}
                                        setgroupid={(e) => setGroupTradeId(e)}
                                    />
                                ))
                            ) : (
                                "Нету открытых групп"
                            )
                        ) : (
                            <SpinnerLoad />
                        )}
                    </div>
                    <div className="main__content__traider__content__pagination">
                        <ReactPaginate
                            className="react-paginate"
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={5}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
                <div className="main__content__premium">
                    <div className="main__title">
                        <div className="main__title__logo">
                            <img src={premium} alt="instruct" />
                        </div>
                        <div className="main__title__text">
                            <p>Какие у нас</p>
                            <span>преимущества </span>
                        </div>
                    </div>
                    <div className="main__content__premium__desc">
                        <p>
                            Sky Invest занимается брокерской/дилерской
                            деятельностью на более 150 рынках по всему миру. В
                            качестве брокера Sky Invest предоставляет
                            институционным и профессиональным трейдерам прямой
                            доступ к ("онлайн") услугам по клирингу и исполнению
                            сделок с широким спектром инструментов (включая
                            акции, опционы, фьючерсы, валюту, облигации, золото,
                            крипто* и фонды по всему миру). Interactive Brokers
                            Group и ее дочерние предприятия осуществляют более
                            2,499,000 сделок в день.
                        </p>
                    </div>
                    <div className="main__content__premium__content">
                        <div className="main__content__premium__content__card">
                            <img src={product} alt={"product"} />
                            <span>Уникальный продукт</span>
                            <p>
                                Копитрейдинг в один клик объединяющий более 10
                                тыс. трейдеров Единый контракт позволяет
                                размещать сделки без дополнительной конвертации
                                Единственные на рынке поддерживаем USDC в
                                качестве маржи.
                            </p>
                        </div>
                        <div className="main__content__premium__content__card">
                            <img src={security} alt={"security"} />
                            <span>Безопасность</span>
                            <p>
                                Копитрейдинг в один клик объединяющий более 10
                                тыс. трейдеров Единый контракт позволяет
                                размещать сделки без дополнительной конвертации
                                Единственные на рынке поддерживаем USDC в
                                качестве маржи.
                            </p>
                        </div>
                        <div className="main__content__premium__content__card">
                            <img src={help} alt={"help"} />
                            <span>Клиентская поддержка</span>
                            <p>
                                Копитрейдинг в один клик объединяющий более 10
                                тыс. трейдеров Единый контракт позволяет
                                размещать сделки без дополнительной конвертации
                                Единственные на рынке поддерживаем USDC в
                                качестве маржи.
                            </p>
                        </div>
                        <div className="main__content__premium__content__card">
                            <img src={lider} alt={"lider"} />
                            <span>Лидеры на рынке деривативов</span>
                            <p>
                                Копитрейдинг в один клик объединяющий более 10
                                тыс. трейдеров Единый контракт позволяет
                                размещать сделки без дополнительной конвертации
                                Единственные на рынке поддерживаем USDC в
                                качестве маржи.
                            </p>
                        </div>
                        <div className="main__content__premium__content__card">
                            <img src={control} alt={"control"} />
                            <span>Лидеры на рынке деривативов</span>
                            <p>
                                Копитрейдинг в один клик объединяющий более 10
                                тыс. трейдеров Единый контракт позволяет
                                размещать сделки без дополнительной конвертации
                                Единственные на рынке поддерживаем USDC в
                                качестве маржи.
                            </p>
                        </div>
                        <div className="main__content__premium__content__card">
                            <img src={reliability} alt={"reliability"} />
                            <span>Надёжность</span>
                            <p>
                                Копитрейдинг в один клик объединяющий более 10
                                тыс. трейдеров Единый контракт позволяет
                                размещать сделки без дополнительной конвертации
                                Единственные на рынке поддерживаем USDC в
                                качестве маржи.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="main__content__faq">
                    <div className="main__title">
                        <div className="main__title__logo">
                            <img src={faqLogo} alt="instruct" />
                        </div>
                        <div className="main__title__text">
                            <p>Самые часто задаваемые</p>
                            <span>вопросы и ответы </span>
                        </div>
                    </div>
                    <div className="main__content__faq__desc">
                        <p>
                            Sky Invest занимается брокерской/дилерской
                            деятельностью на более 150 рынках по всему миру. В
                            качестве брокера Sky Invest предоставляет
                            институционным и профессиональным трейдерам прямой
                            доступ к ("онлайн") услугам по клирингу и исполнению
                            сделок с широким спектром инструментов (включая
                            акции, опционы, фьючерсы, валюту, облигации, золото
                        </p>
                    </div>
                    <div className="main__content__faq__content">
                        <div className="main__content__faq__content__links">
                            {faqQues &&
                                faqQues.map((e, idx) => (
                                    <div
                                        key={e.id}
                                        className={`faq_btn_block ${
                                            faqTab === e.id ? "active" : ""
                                        }`}
                                    >
                                        <Button
                                            theme={
                                                faqTab === e.id
                                                    ? "beforesubmit"
                                                    : "usually"
                                            }
                                            onClick={() => toggleFaqTab(e.id)}
                                        >
                                            {e.value}

                                            <svg
                                                width="12"
                                                height="7"
                                                viewBox="0 0 12 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.3125 1.375L6.34375 5.875C6.15625 6.0625 5.875 6.0625 5.6875 5.875L0.65625 1.375C0.4375 1.1875 0.4375 0.875 0.625 0.6875C0.8125 0.46875 1.125 0.46875 1.3125 0.65625L6 4.84375L10.6562 0.65625C10.8438 0.46875 11.1562 0.46875 11.3438 0.6875C11.5312 0.875 11.5312 1.1875 11.3125 1.375Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </Button>
                                        <div className="faq_block_main">
                                            {faqAnswer.map((e) => {
                                                if (e.id === faqTab) {
                                                    return e.value;
                                                }
                                            })}
                                            {e?.label}
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="main__content__faq__content__block">
                            {faqAnswer &&
                                faqAnswer.map((e) => {
                                    if (e.id === faqTab) {
                                        return e.value;
                                    }
                                })}
                        </div>
                    </div>
                </div>
                {copyTradeId && (
                    <CopyTradeModal
                        handleChange={() => setCopyTradeId("")}
                        info={copyTradeId}
                    />
                )}
                {freePlaceChange && (
                    <FreePlaceModal
                        handleChange={() => setFreePlaceChange("")}
                        info={freePlaceChange}
                    />
                )}
                <Footer />
            </div>
        </div>
    );
};

export default Main;
