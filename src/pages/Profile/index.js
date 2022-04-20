import React, { useEffect } from "react";

//Hooks
import { usePageTitle } from "@hooks/useTitle";

const Profile = ({ title }) => {
    const { rename } = usePageTitle();

    useEffect(() => {
        rename(title);
    }, []);

    return <div>Profile</div>;
};

export default Profile;
