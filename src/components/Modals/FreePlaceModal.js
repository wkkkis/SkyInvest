import React from "react";

//Components
import Button from "@components/Button";
import Field from "@components/Field";

//Styles
import "./Modal.scss";

const FreePlaceModal = ({ handleChange }) => {
    const hadnleClick = (toggle) => {
        handleChange(toggle);
    };

    return (
        <div className="modal">
            <div className="modal__block">
                <div className="modal__block__title">
                    <span>Уведомить о свободном месте</span>
                </div>
                <div className="modal__block__desc">
                    <span>
                        Введите свой Email чтобы мы могли уведомить вас о
                        появлении свободного места в этой группе.
                    </span>
                </div>
                <Field label="Email" />
                <div className="modal__block__btns">
                    <Button
                        className="modal__block__btns__button"
                        theme="aftersubmit"
                        onClick={() => hadnleClick(true)}
                    >
                        Отмена
                    </Button>
                    <Button
                        className="modal__block__btns__button"
                        theme="beforesubmit"
                        onClick={() => hadnleClick(false)}
                    >
                        Уведомить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FreePlaceModal;
