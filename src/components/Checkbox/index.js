import React from "react";

//Styles
import "./Checkbox.scss";

const Checkbox = ({
    // checked = false,
    // disabled = false,
    id,
    handleChange,
    ...props
}) => {
    return (
        <div className="checkbox">
            <input
                class="checkbox__input"
                id="styled-checkbox-1"
                type="checkbox"
                value="confirm"
                {...props}
            />
            <label for="styled-checkbox-1"></label>
        </div>
    );
};

export default Checkbox;
