import React, {useState} from 'react'
import s from  "./styles.module.css";
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {
    const [connectState, setConnectState] = useState<number>(0)
    const [connectStateMax, setConnectStateMax] = useState<number>(100)


    const valueMainMinChecker = (value1: number) => {
        if (value1 < connectStateMax) {
            console.log(value1)
            console.log(connectState)
            setConnectState(value1)
        } else {
            setConnectState(connectStateMax)
        }
    }

    const valueMainMaxChecker = (value3: number) => {
        if (value3 < connectState)
            setConnectStateMax(connectState)
        else {setConnectStateMax(value3)}
    }

    return (
        <div className={s.HW11}>
            <hr/>
            homeworks 11

            <SuperRange
                // onChange={(va)=>value1Checker(+va.currentTarget.value)}
                valueMin={connectState}
                onChangeRange={(val)=>valueMainMinChecker(val)}
            />

            <SuperDoubleRange
                onChangeRange={(val)=>valueMainMinChecker(val)}
                onChangeRange1={(val)=>valueMainMaxChecker(val)}
                valueMax={connectStateMax}
                valueMin={connectState}
            />
        </div>

    )
}

export default HW11
