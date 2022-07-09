import React, { useCallback, useEffect, useState, useRef } from "react";

//Styles
import "./RangeSlider.scss";

const RangeSlider = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(0);
    const minValRef = useRef(min);

    useEffect(() => {
        setMaxVal(max);
        setMinVal(min);
    }, [min, max]);

    useEffect(() => {
        onChange(minVal);
    }, [minVal, maxVal, onChange]);

    return (
        <div className="slider-container">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className="thumb thumb--left"
                //@ts-ignore
                style={{ zIndex: minVal > max - 100 && "5" }}
            />

            <div className="slider">
                <div className="slider__values">
                    <span>{minVal}</span>
                    <span>{maxVal} USD</span>
                </div>
                <div className="slider__track" />
                <div className="slider__range" />
            </div>
        </div>
    );
};

export default RangeSlider;
