import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styleCss from "../h2/Affairs.module.css";
import {inspect} from "util";
import styles = module

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: string) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        // props.data.filter(t => t.priority !== 'low' | 'middle' | 'high')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            {mappedAffairs}
            <button onClick={setAll} className={styleCss.filterTypesColor}>All</button>
            <button onClick={setHigh} className={styleCss.filterTypesColor}>High</button>
            <button onClick={setMiddle} className={styleCss.filterTypesColor}>Middle</button>
            <button onClick={setLow} className={styleCss.filterTypesColor}>Low</button>
        </div>
    )
}

export default Affairs
