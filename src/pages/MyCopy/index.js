import React, { useEffect } from "react";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

const MyCopy = ({ title }) => {
    const { rename } = usePageTitle();

    useEffect(() => {
        rename(title);
    }, []);

    return <div>MyCopy</div>;
};

export default MyCopy;
