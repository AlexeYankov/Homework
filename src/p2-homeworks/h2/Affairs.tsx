import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
// import styleCss from "../h2/Affairs.module.css";

export type AffairsPropsType = { // need to fix any
    data: AffairType[]
    filter: FilterType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: string) => void
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
        props.setFilter ('all')
    }
    // need to fix
    const setHigh = () => {
        props.setFilter ('high')
    }

    const setMiddle = () => {
        props.setFilter ('middle')
    }

    const setLow = () => {
        props.setFilter ('low')
    }

    return (
        <div>

            {mappedAffairs}
            <button onClick={setAll} className={props.filter === 'all' ? 'activeFilter' : 'nonActiveFilter'} >All</button>
            <button onClick={setHigh} className={props.filter === 'high' ? 'activeFilter' : 'nonActiveFilter'}>High</button>
            <button onClick={setMiddle} className={props.filter === 'middle' ? 'activeFilter' : 'nonActiveFilter'}>Middle</button>
            <button onClick={setLow} className={props.filter === 'low' ? 'activeFilter' : 'nonActiveFilter'}>Low</button>
        </div>
    )
}

export default Affairs
