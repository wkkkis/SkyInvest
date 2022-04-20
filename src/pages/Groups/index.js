import React, { useEffect } from "react";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

const Groups = ({ title }) => {
    const { rename } = usePageTitle();

    useEffect(() => {
        rename(title);
    }, []);

    return <div>Groups</div>;
};

export default Groups;
