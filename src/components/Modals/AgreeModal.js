import React, { useState } from "react";

//Components
import Button from "@components/Button";
import Checkbox from "../Checkbox";

//Styles
import "./Modal.scss";

const AgreeModal = ({ handleChange }) => {
    const [check, setCheck] = useState(false);
    const hadnleClick = (toggle) => {
        handleChange(toggle);
    };

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
                        onClick={() => setCheck(!check)}
                        id="register_confirm"
                        group="register_confirm"
                        label={`Я принимаю условия`}
                    />
                    <a href="#">соглашения</a>
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
};

export default AgreeModal;
