import React from 'react'
import {AffairType} from "./HW2";
import styleCss from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: string) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () =>
        props.deleteAffairCallback(props.affair._id)
    // need to fix
    return (
        <div className={styleCss.HW2}>
            <div className={styleCss.userTaskName}>{props.affair.name}</div>
            <div className={styleCss.userTaskPriority}>{props.affair.priority}</div>
            <div style={{marginRight: '5px'}} ><SuperButton onClick={deleteCallback} red>x</SuperButton></div>
        </div>
    )
}

export default Affair
