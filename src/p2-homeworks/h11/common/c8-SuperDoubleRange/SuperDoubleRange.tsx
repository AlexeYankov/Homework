import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from "react";
import s from "../../styles.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void;
    onChangeRangeMax?: (value: number) => void;
    valueMax: number;
    valueMin: number;
    // disabled?:string
    // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
    type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
    onChange,
    onChangeRange,
    onChangeRangeMax,
    className,
    valueMin,
    valueMax,
    value,
    min,
    max,
    step,
    disabled,

    ...restProps // все остальные пропсы попадут в объект restProps
    // min, max, step, disable, ...
}) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value);
    };
    const onChangeCallback1 = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRangeMax && onChangeRangeMax(+e.currentTarget.value);
    };

    const finalRangeClassName = `${s.range} ${className ? className : ""}`;

    return (
        <>
            <div className={s.wrapperHW11}>
                <div className={s.priceInput}>
                    <div className={s.field}>
                        <input
                            type="number"
                            className={s.inputMin}
                            value={valueMin}
                            onChange={onChangeCallback}
                        />
                    </div>
                </div>
                <div className={s.sliderWrapper}>
                    <div className={s.slider}>
                        <div
                            className={s.progress}
                            style={{
                                left: `${valueMin + "%"}`,
                                right: `${100 - valueMax + "%"}`,
                            }}></div>
                    </div>

                    <div className={s.rangeInput}>
                        <input
                            type="range"
                            className={s.rangeMin}
                            min={0}
                            max={100}
                            value={valueMin}
                            onChange={onChangeCallback}
                            {...restProps}
                        />
                        <input
                            type="range"
                            className={s.rangeMin}
                            min={0}
                            max={100}
                            value={valueMax}
                            onChange={onChangeCallback1}
                            {...restProps}
                        />
                    </div>
                </div>
                <div className={s.priceInput}>
                    <div className={s.field}>
                        <input
                            type="number"
                            className={s.inputMin}
                            value={valueMax}
                            onChange={onChangeCallback1}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuperDoubleRange;
