import React, { useEffect } from "react";
//Hooks
import { usePageTitle } from "@hooks/useTitle";

const Payments = ({ title }) => {
    const { rename } = usePageTitle();

    useEffect(() => {
        rename(title);
    }, []);

    return <div>Payments</div>;
};

export default Payments;
