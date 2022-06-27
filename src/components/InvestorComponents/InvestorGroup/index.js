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
import InsideGroupModal from "../../Modals/InsideGroupModal";

const InvestorGroup = ({ e, clean_group, setgroupid, className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [readMore, setReadMore] = useState(true);
    const [leaveToggle, setLeaveToggle] = useState(false);
    const [InsideToggle, setInsideToggle] = useState(false);

    const handleClick = () => {
        navigate(`${router.profile}/${e?.trader}`);
    };

    const leave = (toggle) => {
        if (e.status_for_user && toggle) {
            dispatch(leaveFromGroup(e?.id));
        }
        setLeaveToggle(false);
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
            <div className={`${className}__title`}>
                <span>{e.title}</span>
            </div>
            <div className={`${className}__desc ${readMore && "active"}`}>
                <p>{e.description}</p>
            </div>
            {e?.description?.length > 30 ? (
                <Button onClick={() => setReadMore(!readMore)}>
                    ПОКАЗАТЬ ВСЕ
                </Button>
            ) : null}
            <div className={`${className}__linebar`}>
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
                            setInsideToggle(true);
                        }
                    }
                }}
                disabled={e.status === "end"}
                theme={
                    e.status_for_user
                        ? e.status === "completed"
                            ? "disabled"
                            : e.status === "recruited"
                            ? "beforesubmit"
                            : e.status === "was"
                            ? "aftersubmit"
                            : e.status === "completed"
                            ? "disabled"
                            : ""
                        : "aftersubmit"
                }
            >
                {e.status_for_user
                    ? e.status === "completed"
                        ? "Группа завершена"
                        : e.status === "recruited"
                        ? "Вступить в группу"
                        : e.status === "was"
                        ? "Выйти из группы"
                        : ""
                    : "Выйти из группы"}
            </Button>

            {InsideToggle ? (
                <InsideGroupModal
                    handleChange={() => setInsideToggle(false)}
                    info={e.id}
                />
            ) : null}
            {leaveToggle ? <LeaveGroup handleChange={leave} /> : null}
        </CardInfo>
    ) : (
        <SpinnerLoad />
    );
};

export default InvestorGroup;
