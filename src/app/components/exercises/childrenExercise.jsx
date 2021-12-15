import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, key) => {
        const config = {
            ...child.props,
            number: key + 1
        };
        return React.cloneElement(child, config);
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как
                <code>React.Children.map</code> так и
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = ({ number }) => {
    return (
        <div>
            <span>{number}</span>
            <div className="d-inline-block mx-2">Компонент списка</div>
        </div>
    );
};

Component.propTypes = {
    number: PropTypes.number
};

export default ChildrenExercise;
