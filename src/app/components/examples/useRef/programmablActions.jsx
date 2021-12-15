import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    };

    const handleClickWidth = () => {
        console.log(inputRef);
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input className="form-control" ref={inputRef} type="email" />
            <button className="btn btn-primary" onClick={handleClick}>Фокус input </button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>Изменить ширину</button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
