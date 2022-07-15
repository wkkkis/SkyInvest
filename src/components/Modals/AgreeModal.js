import React, { useEffect, useMemo, useState } from "react";

//Components
import Button from "@components/Button";
import Checkbox from "../Checkbox";

//Styles
import "./Modal.scss";
import { Link } from "react-router-dom";
import router from "../../utils/router";

const AgreeModal = React.memo(({ handleChange }) => {
    const [check, setCheck] = useState(false);
    const hadnleClick = (toggle) => {
        handleChange(toggle);
    };

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (e.target.className === "modal") {
                handleChange(false);
            }
        });
    }, []);

    return (
        <div className="modal">
            <div className="modal__block">
                <div className="modal__block__title">
                    <span>Вы действиетльно хотите продолжить?</span>
                </div>
                <div className="modal__block__desc">
                    <span>
                        Нажимая на кнопку ниже, я принимаю условия
                        пользовательсвого соглашения
                    </span>
                </div>
                <div className="modal__block__confirm">
                    <Checkbox
                        checked={check}
                        // onClick={() => setCheck(!check)}
                        onChange={(e) => setCheck(e.target.checked)}
                        id="register_confirm_agree"
                        group="register_confirm_agree"
                        label={`Я принимаю условия`}
                    />
                    <a href={router.agree_page} target="_blank">
                        соглашения
                    </a>
                </div>
                <div className="modal__block__btns">
                    <Button
                        disabled={!check}
                        className="modal__block__bts_button"
                        theme="aftersubmit"
                        onClick={() => hadnleClick(true)}
                    >
                        Продолжить
                    </Button>
                </div>
            </div>
        </div>
    );
});

export default AgreeModal;
