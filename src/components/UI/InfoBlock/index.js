import React from "react";

//Styles
import "./InfoBlock.scss";

const InfoBlock = ({
    label,
    value,
    opactityLabel = false,
    opactityValue = false,
    color = "",
    lWeigth = "400",
    vWeigth = "400",
    fontSize = "14",
}) => {
    return (
        <div className={`infoblock ${fontSize && "f" + fontSize}`}>
            <div
                className={`infoblock__label ${lWeigth && "w" + lWeigth} ${
                    opactityLabel ? "opacity" : ""
                }`}
            >
                <span>{label}</span>
            </div>
            <div
                className={`infoblock__value ${color} ${
                    vWeigth && "w" + vWeigth
                } ${opactityValue ? "opacity" : ""}`}
            >
                <span>{value}</span>
            </div>
        </div>
    );
};

export default InfoBlock;
