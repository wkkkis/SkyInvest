import React, { useState } from "react";

//Components
import CardInfo from "@components/CardInfo";
import Button from "@components/Button";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import SpinnerLoad from "../../SpinnerLoad";

//Styles
import "./CloseGroup.scss";

const CloseGroup = ({ e, clean_group, setgroupid, className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [readMore, setReadMore] = useState(true);

    return e ? (
        <CardInfo
            className={`${className} close_group`}
            name={`${e.first_name} ${e.last_name}`}
            email={e.email}
            end={true}
            rating={e.rating}
            logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
        >
            <div
                className={`main__group_content__card__title ${className}__title close_group__title`}
            >
                <span>{e.title}</span>
            </div>
            <div
                className={`main__group_content__card__desc close_group__desc ${
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
            <Button onClick={() => setgroupid(e?.id)} theme={"aftersubmit"}>
                Подробнее
            </Button>
        </CardInfo>
    ) : (
        <SpinnerLoad />
    );
};

export default CloseGroup;
