import React, { useState } from "react";

const withAuth = (Component) => (props) => {
    const [auth, setAuth] = useState(localStorage.getItem("user"));

    const onLogOut = () => {
        localStorage.removeItem("user");
        setAuth("");
    };

    const onLogin = () => {
        localStorage.setItem("user", "user");
        setAuth("user");
    };
    return <Component {...props} onLogin={onLogin} isAuth={auth} onLogOut={onLogOut} />;
};

export default withAuth;
