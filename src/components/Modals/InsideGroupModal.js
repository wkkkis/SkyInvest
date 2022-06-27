import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Components
import Button from "@components/Button";
import CardInfo from "../CardInfo";
import InfoBlock from "@components/UI/InfoBlock";
import RangeSlider from "@components/RangeSlider";
import Checkbox from "@components/Checkbox";
import ProgressBar from "@components/ProgressBar";

//Icons
import balance from "@assets/img/balance.svg";

//Styles
import "./Modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { getGroupInfo, joinToGroup } from "../../store/group/group.api";
import SpinnerLoad from "../SpinnerLoad";
import { useNavigate } from "react-router";
import router from "../../utils/router";
import AgreeModal from "./AgreeModal";

const InsideGroupModal = ({ handleChange, info }) => {
    const [sum, setSum] = useState(0);
    const [modalTab, setModalTab] = useState(false);
    const [check, setCheck] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { group, load } = useSelector((state) => state.group);
    const { isAuth } = useSelector((state) => state.auth);

    const hadnleClick = (toggle) => {
        if (toggle) {
            handleChange(0);
        } else {
            handleChange(0);
        }
    };

    useEffect(() => {
        if (info) {
            dispatch(getGroupInfo(info));
        }
    }, [info]);

    const rangeChange = (length) => {
        setSum(length);
    };

    const join = (id) => {
        if (isAuth) {
            dispatch(joinToGroup(id, sum));
        } else {
            navigate(router.login);
        }
    };

    const handleClick = () => {
        navigate(`${router.profile}/${group?.trader}`);
    };

    return (
        <>
            {!modalTab && (
                <div className="modal">
                    <div className="modal__block">
                        {group ? (
                            <>
                                <div className="modal__block__title">
                                    <span>{group.title}</span>
                                </div>
                                <div className="modal__block__desc opacity">
                                    <span>{group.description}</span>
                                </div>
                                <div className="modal__block__line"></div>
                                <CardInfo
                                    id={group.id}
                                    className="modal__block__profit"
                                    name={`${group.first_name} ${group.last_name}`}
                                    email={group.email}
                                    onClick={handleClick}
                                    rating={`${group.investors.length}/${group.group_size}`}
                                    logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
                                />
                                <div className="modal__block__line"></div>
                                <span className="w400 f12">
                                    {Math.round(
                                        (Date.now() -
                                            new Date(group?.end_date)) /
                                            (1000 * 60 * 60 * 24)
                                    )
                                        .toString()
                                        .replace("-", "")}{" "}
                                    дней
                                </span>
                                <ProgressBar
                                    completed={
                                        (group.amount_collected /
                                            group.need_sum) *
                                        100
                                    }
                                    from={group.amount_collected}
                                    to={group.need_sum}
                                    start={group.start_date}
                                    end={group.end_date}
                                />
                                <span className="w700 f12">
                                    ВАША СУММА ВСТУПЛЕНИЯ
                                </span>
                                <RangeSlider
                                    min={group?.min_entry_sum}
                                    max={group?.max_entry_sum}
                                    onChange={(e) => rangeChange(e)}
                                />
                                <div className="modal__block__confirm">
                                    <Checkbox
                                        id={info}
                                        checked={check}
                                        onChange={(e) =>
                                            setCheck(e.target.checked)
                                        }
                                        label="Я принимаю условия"
                                    />
                                    <span>
                                        <a
                                            href="#"
                                            onClick={() => setModalTab(true)}
                                        >
                                            соглашения
                                        </a>
                                    </span>
                                </div>
                                <div className="modal__block__btns">
                                    <Button
                                        className="modal__block__btns__button"
                                        theme="aftersubmit"
                                        onClick={() => hadnleClick(false)}
                                    >
                                        Отмена
                                    </Button>
                                    <Button
                                        className="modal__block__btns__button"
                                        theme={
                                            group.status === "recruited"
                                                ? "beforesubmit"
                                                : "aftersubmit"
                                        }
                                        onClick={() => {
                                            join(group.id);
                                            hadnleClick(true);
                                        }}
                                    >
                                        {load ? (
                                            <SpinnerLoad />
                                        ) : group.status === "recruited" ? (
                                            "Вступить"
                                        ) : (
                                            "Выйти из группы"
                                        )}
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <SpinnerLoad />
                        )}
                    </div>
                </div>
            )}
            {modalTab && (
                <AgreeModal
                    handleChange={(toggle) => {
                        setCheck(toggle);
                        setModalTab(false);
                    }}
                />
            )}
        </>
    );
};

export default InsideGroupModal;
