import React, { useEffect } from "react";
import { usePageTitle } from "../../hooks/useTitle";

const Cash = ({ title }) => {
    const { rename } = usePageTitle();

    useEffect(() => {
        rename(title);
    }, []);

    return <div>Cash</div>;
};

export default Cash;
