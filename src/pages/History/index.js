import React, { useEffect } from "react";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

const History = ({ title }) => {
    const { rename } = usePageTitle();

    useEffect(() => {
        rename(title);
    }, []);

    return <div>History</div>;
};

export default History;
