import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    }, []);
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEaqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }

    return true;
}
const MemoizedLogOutButton = React.memo(LogOutButton, areEaqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);

    const handleOut = useMemo(() => {
        localStorage.removeItem("auth");
    }, []);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initial render
            </button>
            <MemoizedLogOutButton onLogOut={handleOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
