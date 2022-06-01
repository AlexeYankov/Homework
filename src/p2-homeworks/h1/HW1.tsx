import React from 'react'
// import {TaskType} from "../../p1-main/m1-ui/u1-app/App"
import styleCss from "./HW1.module.css";

type messageData = {
    tasks: TaskType
}

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
const HW1 = (props: messageData) => {
    return (
        <div>
            <hr/>
            homeworks 1
            should work (должно работать)
            <hr/>
            <div className={styleCss.userPost}>
                <div className={styleCss.userAvatar}>
                    <img src={props.tasks.avatar} alt="avatar must be here"/>
                </div>
                <div className={styleCss.userMessageContainer}>
                    <div className={styleCss.userName}>
                        <span>{props.tasks.name}</span>
                    </div>
                    <div className={styleCss.userMessageText}>
                        <span>{props.tasks.message}</span>
                    </div>
                    <div className={styleCss.userMessageTextTime}>
                        <a>{props.tasks.time}</a>
                    </div>
                </div>
                <div className={styleCss.userMessageCorner}>
                    <svg width="21.95" height="22.0" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_2_8)">
                            <path d="M4.73684 14C14.3474 14 18 4.66667 18 0V14H4Z" fill="#043b04"/>
                            <path d="M18 14V0C18 9.1 15.3474 14 9.73684 14H18ZM18 14H4" stroke="#043b04"
                                  strokeWidth="0.1"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_2_8" x="0" y="0" width="22" height="22"
                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 157 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_8"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_8" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<alternativemessage/>*!/*/}
            {/*<hr/>*/}
        </div>
    );
};
export default HW1;
