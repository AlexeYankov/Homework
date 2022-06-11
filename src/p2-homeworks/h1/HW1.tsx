import React from 'react'
// import {TaskType} from "../../p1-main/m1-ui/u1-app/App"
import styleCss from "./HW1.module.css";
import Message from "./Message";


export type TaskType = {
    avatar: string
    name: string
    message: string
    time: string
}
export const tasks: TaskType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: "Artem",
    message: "npm start нажимал?",
    time: '20:00'
}
const HW1 = () => {
    return (
        <div>
            <hr/>
            homeworks 1
            <hr/>
            <Message
            tasks={tasks}
            />
            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<alternativemessage/>*!/*/}
            {/*<hr/>*/}
        </div>
    );
};
export default HW1;
