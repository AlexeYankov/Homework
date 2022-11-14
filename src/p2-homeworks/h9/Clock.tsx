import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)
    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        // const b = () => setShow(false)
        const a = () => setShow(true)
        setTimeout(a,1000)
    }
    const onMouseLeave = () => {
        // close
        const b = () =>  setShow(false)
        // const a = () => setShow(true)
        setTimeout(b,3000)
    }
    // const re = /'.'/gi;
    const stringTime = date?.toLocaleTimeString() // fix with date
    const stringDate = date?.toLocaleDateString() // fix with date

    return (
        <div className={s.HW9}>
            <div className={s.HW9Other}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>
            <div className={s.HW9Buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
