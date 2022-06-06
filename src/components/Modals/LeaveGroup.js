import React from "react";

//Components
import Button from "@components/Button";
import Field from "@components/Field";

//Styles
import "./Modal.scss";

const LeaveGroup = ({ handleChange, info }) => {
    const hadnleClick = (toggle) => {
        if (toggle) {
            console.log(toggle);
        } else {
            handleChange(0);
        }
    };

    return (
        <div className="modal">
            <div className="modal__block">
                <div className="modal__block__title">
                    <span>Выйти из группы ?</span>
                </div>
                <div className="modal__block__btns">
                    <Button
                        className="modal__block__btns__button"
                        theme="danger"
                        onClick={() => hadnleClick(true)}
                    >
                        Выйти
                    </Button>
                    <Button
                        className="modal__block__btns__button"
                        theme="aftersubmit"
                        onClick={() => hadnleClick(false)}
                    >
                        Отменить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LeaveGroup;
