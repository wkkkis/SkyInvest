import React, { useEffect } from "react";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

const Security = ({ title }) => {
    const { rename } = usePageTitle();

    useEffect(() => {
        rename(title);
    }, []);

    return <div>Security</div>;
};

export default Security;
