import React, { useEffect } from "react";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

const DashBoard = ({ title }) => {
    const { rename } = usePageTitle();

    useEffect(() => {
        rename(title);
    }, []);
    return <div className="main">DashBoard</div>;
};

export default DashBoard;
