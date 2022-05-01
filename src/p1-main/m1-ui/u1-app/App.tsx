import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'

export type TaskType = {
    avatar: string
    name: string
    message: string
    time: string
}
function App() {
    const tasks:  TaskType =
        {avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg', name: "Artem", message:"npm start нажимал?", time:'20:00'}

    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            <HW1
                tasks={tasks}
            />
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            {/*<HW5/>*/}
        </div>
    )
}

export default App;
