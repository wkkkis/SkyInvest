import React from "react";
import { Map, YMaps } from "react-yandex-maps";

const MapContainer = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: 10,
            }}
        >
            <YMaps>
                <Map
                    width="100%"
                    height="100%"
                    defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                />
            </YMaps>
        </div>
    );
};

export default MapContainer;
