import React from 'react'
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
            homework 1
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
