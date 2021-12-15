import React, { useState, useEffect, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "./../../common/divider";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withCallback = useRef(0);
    const withoutCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // without callback
    const validateWithoutCallback = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>Render with callback: {withCallback.current}</p>
            <p>Render without callback: {withoutCallback.current}</p>
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                className="form-control"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
                type="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
