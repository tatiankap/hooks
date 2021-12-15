import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const someRef = useRef(0);
    const [otherState, setOtherState] = useState(false);

    const toggleOtherSate = () => {
        console.log(otherState);
        setOtherState((prevState) => !prevState);
    };

    useEffect(() => {
        someRef.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <Divider />
            <p>render count: {someRef.current}</p>
            <button
                className="btn btn-primary"
                onClick={toggleOtherSate}
            >toggle other state</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
