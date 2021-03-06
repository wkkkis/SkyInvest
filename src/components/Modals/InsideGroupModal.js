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
import {
    getGroupInfo,
    groupActions,
    joinToGroup,
} from "../../store/group/group.api";
import SpinnerLoad from "../SpinnerLoad";
import { useNavigate } from "react-router";
import router from "../../utils/router";
import AgreeModal from "./AgreeModal";

const InsideGroupModal = ({ handleChange, info }) => {
    const [sum, setSum] = useState(0);
    const [check, setCheck] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { group, load } = useSelector((state) => state.group);
    const { isAuth } = useSelector((state) => state.auth);

    const [data, setData] = useState(group);

    useEffect(() => {
        setData(group);
    }, [group]);

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
    }, []);

    const rangeChange = (length) => {
        setSum(length);
    };

    const join = (id) => {
        if (isAuth) {
            dispatch(joinToGroup(id, sum));
            dispatch(groupActions.setGroup(null));
            setData(null);
        } else {
            navigate(router.login);
        }
    };

    const handleClick = () => {
        navigate(`${router.profile}/${group?.trader}`);
    };

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (e.target.className === "modal") {
                handleChange(false);
            }
        });
    }, []);

    return (
        <>
            <div className="modal">
                <div className="modal__block">
                    {data ? (
                        <>
                            <div className="modal__block__title">
                                <span>{data.title}</span>
                            </div>
                            <div className="modal__block__desc opacity">
                                <span>{data.description}</span>
                            </div>
                            <div className="modal__block__line"></div>
                            <CardInfo
                                id={data.id}
                                className="modal__block__profit"
                                name={`${data.first_name} ${data.last_name}`}
                                email={data.email}
                                onClick={handleClick}
                                rating={`${data.investors.length}/${data.group_size}`}
                                logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
                            />
                            <div className="modal__block__line"></div>
                            <span className="w400 f12">
                                {Math.round(
                                    (new Date(data?.start_date) -
                                        new Date(data?.end_date)) /
                                        (1000 * 60 * 60 * 24)
                                )
                                    .toString()
                                    .replace("-", "")}{" "}
                                ????????
                            </span>
                            <ProgressBar
                                completed={
                                    (data.amount_collected / data.need_sum) *
                                    100
                                }
                                from={data.amount_collected}
                                to={data.need_sum}
                                start={data.start_date}
                                end={data.end_date}
                            />
                            <span className="w700 f12">
                                ???????? ?????????? ????????????????????
                            </span>
                            <RangeSlider
                                min={data.min_entry_sum}
                                max={data.max_entry_sum}
                                onChange={(e) => rangeChange(e)}
                            />
                            <div className="modal__block__confirm">
                                <Checkbox
                                    id={info}
                                    checked={check}
                                    onChange={(e) => setCheck(e.target.checked)}
                                    label="?? ???????????????? ??????????????"
                                />
                                <span>
                                    <a href={router.agree_page} target="_blank">
                                        ????????????????????
                                    </a>
                                </span>
                            </div>
                            <div className="modal__block__btns">
                                <Button
                                    className="modal__block__btns__button"
                                    theme="aftersubmit"
                                    onClick={() => {
                                        hadnleClick(false);
                                        setData(null);
                                        dispatch(groupActions.setGroup(null));
                                    }}
                                >
                                    ????????????
                                </Button>
                                <Button
                                    className="modal__block__btns__button"
                                    theme={
                                        data.status === "recruited"
                                            ? "beforesubmit"
                                            : "aftersubmit"
                                    }
                                    disabled={!check}
                                    onClick={() => {
                                        join(data.id);
                                        hadnleClick(true);
                                    }}
                                >
                                    {load ? (
                                        <SpinnerLoad />
                                    ) : data.status === "recruited" ? (
                                        "????????????????"
                                    ) : (
                                        "?????????? ???? ????????????"
                                    )}
                                </Button>
                            </div>
                        </>
                    ) : (
                        <SpinnerLoad />
                    )}
                </div>
            </div>
        </>
    );
};

export default InsideGroupModal;
