import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean;
    className?: string;
    xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
    red,
    className,
    disabled,
    xType,
    ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
    const finalClassName = `${red ? s.red : s.default && xType} ${className}`;
    console.log(s.default, xType)

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
};

export default SuperButton;
