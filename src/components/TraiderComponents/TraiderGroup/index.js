import React, { useState } from "react";

//Components
import CardInfo from "@components/CardInfo";
import Button from "@components/Button";
import ProgressBar from "@components/ProgressBar";
import { useNavigate } from "react-router";
import router from "../../../utils/router";
import { useDispatch, useSelector } from "react-redux";
import RemoveGroup from "../../Modals/RemoveGroup";
import { Link } from "react-router-dom";
import RaspustitModal from "../../Modals/RaspustitModal";
import { deleteGroup } from "../../../store/group/group.api";

const TraiderGroup = ({ e, className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [readMore, setReadMore] = useState(true);
    const [remove, setRemove] = useState(false);
    const [raspus, setRaspus] = useState(false);

    const { isTraider } = useSelector((state) => state.user);

    const handleClick = () => {
        if (isTraider) {
            navigate(`${router.groups}/${e.id}`);
        }
    };

    const handleGroup = (t) => {
        if (t === "remove") {
            dispatch(deleteGroup(e.id));
            setRemove(false);
        } else {
            setRemove(false);
        }
    };

    const handleRaspus = (e) => {
        if (e === "raspus") {
            setRaspus(false);
        } else {
            setRaspus(false);
        }
    };

    return (
        e && (
            <CardInfo
                className={className}
                name={`${e?.first_name} ${e?.last_name}`}
                email={e.email}
                rating={e.rating}
                onClick={handleClick}
                logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
            >
                <div className={`${className}__title`}>
                    <span>{e.title || "Название группы"}</span>
                </div>
                <div
                    className={`main__group_content__card__desc ${
                        readMore && "active"
                    }`}
                >
                    <p>{e.description}</p>
                </div>
                {e?.description?.length > 30 && (
                    <Button onClick={() => setReadMore(!readMore)}>
                        ПОКАЗАТЬ ВСЕ
                    </Button>
                )}
                <div className={`${className}__linebar`}>
                    <ProgressBar
                        completed={(e.amount_collected / e.need_sum) * 100}
                        from={e?.amount_collected}
                        to={e?.need_sum}
                        start={e?.start_date}
                        end={e?.end_date}
                    />
                </div>
                {e?.investors && !e?.investors.length ? (
                    <div style={{ display: "flex", gap: "16px" }}>
                        <Button
                            onClick={() => setRemove(true)}
                            theme={"danger"}
                        >
                            Удалить
                        </Button>
                        <Button
                            onClick={() => navigate(`${router.groups}/${e.id}`)}
                            theme={"aftersubmit"}
                        >
                            Подробнее
                        </Button>
                    </div>
                ) : e?.investors && e?.investors.length ? (
                    <div style={{ display: "flex", gap: "16px" }}>
                        <Button
                            onClick={() => setRemove(true)}
                            theme={"aftersubmit"}
                        >
                            Распустить
                        </Button>
                        <Button
                            onClick={() => navigate(`${router.groups}/${e.id}`)}
                            theme={"aftersubmit"}
                        >
                            Подробнее
                        </Button>
                    </div>
                ) : null}

                {remove ? <RemoveGroup handleChange={handleGroup} /> : null}
                {raspus ? <RaspustitModal handleChange={handleRaspus} /> : null}
            </CardInfo>
        )
    );
};

export default TraiderGroup;
