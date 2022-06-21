import React from "react";

//Styles
import "./SpinnerLoad.scss";

const SpinnerLoad = ({ isLayout = false }) => {
    return (
        <div className={`load ${isLayout ? "forlayout" : ""}`}>
            <div className="load__spinner"></div>
        </div>
    );
};

export default SpinnerLoad;
