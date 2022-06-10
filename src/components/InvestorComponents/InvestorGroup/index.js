import React, { useState } from "react";

//Components
import CardInfo from "@components/CardInfo";
import Button from "@components/Button";
import ProgressBar from "@components/ProgressBar";
import { useNavigate } from "react-router";
import router from "../../../utils/router";
import { useDispatch } from "react-redux";
import { joinToGroup, leaveFromGroup } from "../../../store/group/group.api";
import SpinnerLoad from "../../SpinnerLoad";
import LeaveGroup from "../../Modals/LeaveGroup";

const InvestorGroup = ({ e, clean_group, setgroupid, className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [readMore, setReadMore] = useState(true);
    const [leaveToggle, setLeaveToggle] = useState(false);

    const handleClick = () => {
        navigate(`${router.profile}/${e?.trader}`);
    };

    const leave = (toggle) => {
        if (e.status_for_user && toggle) {
            dispatch(leaveFromGroup(e?.id));
        }
    };

    return e ? (
        <CardInfo
            className={`${className}`}
            name={`${e.first_name} ${e.last_name}`}
            email={e.email}
            rating={e.rating}
            onClick={handleClick}
            logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
        >
            <div className="main__group_content__card__title">
                <span>{e.title}</span>
            </div>
            <div
                className={`main__group_content__card__desc ${
                    readMore && "active"
                }`}
            >
                <p>{e.description}</p>
            </div>
            {e?.description?.split("").length > 100 ? (
                <Button onClick={() => setReadMore(!readMore)}>
                    ПОКАЗАТЬ ВСЕ
                </Button>
            ) : null}
            <div className="main__group_content__card__linebar">
                <ProgressBar
                    completed={(e.amount_collected / e.need_sum) * 100}
                    from={e.amount_collected}
                    to={e.need_sum}
                    start={e.start_date}
                    end={e.end_date}
                />
            </div>
            <Button
                onClick={() => {
                    if (e.status_for_user) {
                        setLeaveToggle(true);
                    } else {
                        if (e.status === "recruited") {
                            setgroupid(e.id);
                        }
                    }
                }}
                disabled={e.status === "end"}
                theme={
                    !e.status_for_user
                        ? e.status === "recruited"
                            ? "beforesubmit"
                            : e.status === "was"
                            ? "aftersubmit"
                            : e.status === "end"
                            ? "disabled"
                            : ""
                        : "aftersubmit"
                }
            >
                {!e.status_for_user
                    ? e.status === "recruited"
                        ? "Вступить в группу"
                        : e.status === "was"
                        ? "Выйти из группы"
                        : e.status === "end"
                        ? "Группа старотовала"
                        : ""
                    : "Выйти из группы"}
            </Button>

            {leaveToggle ? <LeaveGroup handleChange={leave} /> : null}
        </CardInfo>
    ) : (
        <SpinnerLoad />
    );
};

export default InvestorGroup;
