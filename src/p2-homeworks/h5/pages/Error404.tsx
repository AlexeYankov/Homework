import React, {useState} from 'react'
import Board from "./Sneak/src/Board/Board";
import s from "./CSS/Error.module.css";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";


function Error404() {
    const [time, setTime] = useState<number>(99999)
    const timeCheck = 150
    const sneakStart = () => {
        if (time===timeCheck) {
            setTime(999999)
        }
        else {
            setTime(timeCheck)
        }
    }

    return (
        <div className={s.Error}>
            <span><SuperButton className={s.Error} onClick={sneakStart}>Click to START/STOP</SuperButton></span>
            <Board time={time}/>

        </div>
    )
}

export default Error404
