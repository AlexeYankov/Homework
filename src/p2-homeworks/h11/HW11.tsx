import React, {useState} from "react";
import s from "./styles.module.css";
import s2 from "../../p1-main/m1-ui/u1-app/App.module.css";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [connectState, setConnectState] = useState<number>(0);
    const [connectStateMax, setConnectStateMax] = useState<number>(100);

    const valueMainMinChecker = (value1: number) => {
        if (value1 < connectStateMax) {
            console.log(value1);
            console.log(connectState);
            setConnectState(value1);
        } else {
            setConnectState(connectStateMax);
        }
    };

    const valueMainMaxChecker = (value3: number) => {
        if (value3 < connectState) setConnectStateMax(connectState);
        else {
            setConnectStateMax(value3);
        }
    };

    return (
        <div className={s.HW11}>
            <div className={s2.hwTitle}>Hometask № 11</div>
            <hr/>
            <div className={s2.hw}>
                <SuperRange
                    // onChange={(va)=>value1Checker(+va.currentTarget.value)}
                    valueMin={connectState}
                    onChangeRange={(val) => valueMainMinChecker(val)}
                />

                <SuperDoubleRange
                    onChangeRange={(val) => valueMainMinChecker(val)}
                    onChangeRangeMax={(val) => valueMainMaxChecker(val)}
                    valueMax={connectStateMax}
                    valueMin={connectState}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW11;
