import React from 'react'
import {AffairType, FilterType} from "./HW2";
import styleCss from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: string) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    return (
        <div className={styleCss.HW2}>
            <div className={styleCss.userTaskName}>{props.affair.name}</div>
            <div className={styleCss.userTaskPriority}>[{props.affair.priority}]</div>
            <div><button onClick={deleteCallback} className={styleCss.userDeleteButton}>x</button></div>
        </div>
    )
}

export default Affair
