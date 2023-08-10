import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from "react";
import s from "../../styles.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void;
    valueMin: number;
};

const SuperRange: React.FC<SuperRangePropsType> = ({
    type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
    onChange,
    onChangeRange,
    className,
    valueMin,

    ...restProps // все остальные пропсы попадут в объект restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value);
    };

    const finalRangeClassName = `${s.range} ${className ? className : ""}`;
    const [value2, setValue2] = useState<number>(100);
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
                            style={{left: `${0 + "%"}`, right: `${100 - valueMin + "%"}`}}></div>
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
                            className={s.rangeMax}
                            min={0}
                            max={100}
                            value={value2}
                            onChange={(event) => ""}
                            {...restProps}
                        />
                    </div>
                </div>
                <div className={s.priceInput}>
                    <div className={s.field}>
                        <input
                            type="number"
                            className={s.inputMax1}
                            value={value2}
                            onChange={(e) => setValue2(+e.currentTarget.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuperRange;
