import React, { useEffect, useState } from "react";

//Components
import UserInfoBlock from "../../components/UI/UserInfoBlock";
import InfoBlock from "../../components/UI/InfoBlock";
import Button from "@components/Button";
import { useDispatch, useSelector } from "react-redux/es/exports";

//Styles
import "./User.scss";
import UserFirstTab from "./UserFirstTab";
import UserSecondTab from "./UserSecondTab";
import UserThirtTab from "./UserThirtTab";
import CopyTradeModal from "../../components/Modals/CopyTradeModal";
import FreePlaceModal from "../../components/Modals/FreePlaceModal";
import {
    changeRate,
    getProfileInfo,
    userActions,
} from "../../store/user/user.api";
import { useParams } from "react-router";
import EstimateModal from "../../components/Modals/EstimateModal";
import SpinnerLoad from "../../components/SpinnerLoad";
import MessageBox from "../../components/MessageBox";

const User = () => {
    const [copyTradeId, setCopyTradeId] = useState();
    const [freePlaceChange, setFreePlaceChange] = useState();
    const [tab, setTab] = useState(0);
    const [renderBlock, setRenderBlock] = useState();
    const [estimate, setEstimate] = useState(false);

    const { user, isTraider, profile, complete, messages } = useSelector(
        (state) => state.user
    );
    const { groups } = useSelector((state) => state.group);

    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(getProfileInfo(params.id));
    }, [user]);

    useEffect(() => {
        dispatch(userActions.message(""));
    }, []);

    const getTab = () => {
        switch (tab) {
            case 0:
                setRenderBlock(<UserFirstTab id={params.id} />);
                break;
            case 1:
                setRenderBlock(<UserSecondTab id={params.id} />);
                break;
            case 2:
                setRenderBlock(<UserThirtTab id={params.id} />);
                break;
            default:
                setRenderBlock(<UserFirstTab id={params.id} />);
                break;
        }
    };

    useEffect(() => {
        getTab();
    }, []);

    useEffect(() => {
        getTab();
    }, [tab]);

    const estimateChange = (data) => {
        if (data) {
            dispatch(changeRate(params.id, data));
        }
        setEstimate(false);
    };

    return profile ? (
        <div className="main">
            <div className="main__header">
                <div className="main__header__title">
                    <UserInfoBlock
                        email={profile?.user?.email}
                        name={`${profile?.user?.first_name} ${profile?.user?.last_name}`}
                        logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
                    />
                </div>
                <div className="main__header__desc">
                    <span>
                        ОЦЕНКА: {profile?.rate}/10{" "}
                        <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.7695 6.05859L17.7969 6.79688C18.2188 6.86719 18.5703 7.14844 18.7109 7.57031C18.8516 7.95703 18.7461 8.41406 18.4297 8.69531L14.7734 12.3164L15.6523 17.4492C15.7227 17.8711 15.5469 18.293 15.1953 18.5391C14.8438 18.8203 14.3867 18.8203 14 18.6445L9.5 16.2188L4.96484 18.6445C4.61328 18.8203 4.12109 18.8203 3.80469 18.5391C3.45312 18.293 3.27734 17.8711 3.34766 17.4492L4.19141 12.3164L0.535156 8.69531C0.21875 8.41406 0.113281 7.95703 0.253906 7.57031C0.394531 7.14844 0.746094 6.86719 1.16797 6.79688L6.23047 6.05859L8.48047 1.38281C8.65625 0.996094 9.04297 0.75 9.5 0.75C9.92188 0.75 10.3086 0.996094 10.4844 1.38281L12.7695 6.05859Z"
                                fill="#FF7A00"
                            />
                        </svg>
                    </span>
                    <Button
                        theme="aftersubmit"
                        onClick={() => setEstimate(true)}
                    >
                        Оценить
                    </Button>
                </div>
            </div>
            <div className="main__user_content">
                <div className="main__user_content__desc">
                    <p>Controlling the risk is my key principle for trading</p>
                </div>
                <div className="main__user_content__profit">
                    <InfoBlock
                        label="Общий ROI"
                        value={`${profile?.roi_statistic} %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                    <InfoBlock
                        label="Общий PNL"
                        value={`0 %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                    <InfoBlock
                        label="Общий MDD"
                        value={`0 %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                    <InfoBlock
                        label="Продажи за 7 дней"
                        value={`0 %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                    <InfoBlock
                        label="Вин рейт 30D"
                        value={`0 %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                    <InfoBlock
                        label="Мин.сумма копии"
                        value={`0 %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                    <InfoBlock
                        label="Копи трейдеров"
                        value={`0 %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                </div>
                <div className="main__user_content__copyinfo">
                    <div className="main__user_content__copyinfo__title">
                        <p>Продолжительность: 36 дней</p>
                        <p>
                            MDD и Win Rate обновляются ежедневно в 03:00 UTC,
                            все остальные данные обновляются ежечасно.
                        </p>
                    </div>
                    <Button
                        theme="beforesubmit"
                        onClick={() => setCopyTradeId(params.id)}
                    >
                        Копировать
                    </Button>
                </div>

                <div className="main__user_content__tabs">
                    <ul className="main__user_content__tabs__links">
                        <li
                            onClick={() => setTab(0)}
                            className={tab === 0 && "active"}
                        >
                            Статистика
                        </li>
                        <li
                            onClick={() => setTab(1)}
                            className={tab === 1 && "active"}
                        >
                            Открытые сделки
                        </li>
                        <li
                            onClick={() => setTab(2)}
                            className={tab === 2 && "active"}
                        >
                            История сделок
                        </li>
                    </ul>
                    <div className="main__user_content__tabs__block">
                        {renderBlock}
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
            {estimate && (
                <EstimateModal
                    handleChange={(e) => estimateChange(e)}
                    info={profile?.rate}
                />
            )}
            {messages
                ? Object.values(messages).map((e) => (
                      <MessageBox message={e[0]} error={true} />
                  ))
                : null}
            {complete ? <MessageBox message={complete} error={false} /> : null}
        </div>
    ) : (
        <SpinnerLoad />
    );
};

export default User;
