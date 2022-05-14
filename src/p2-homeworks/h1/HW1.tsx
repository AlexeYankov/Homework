import React from 'react'
import {TaskType} from "../../p1-main/m1-ui/u1-app/App"
import styleCss from "./HW1.module.css";

type messageData = {
    tasks: TaskType
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
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_2_8)">
                            <path d="M4.73684 14C15.3474 14 18 4.66667 18 0V14H4.73684Z" fill="#043b04"/>
                            <path d="M18 14V0C18 4.66667 15.3474 14 4.73684 14H18ZM18 14H4" stroke="#043b04"
                                  stroke-width="0.1"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_2_8" x="0" y="0" width="22.05" height="22.05"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
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
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<alternativemessage/>*/}
            <hr/>
        </div>
    );
};
export default HW1;
