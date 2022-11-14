import React, {useState} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import r from "../h4/common/c2-SuperButton/SuperButton.module.css";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";

export type AffairsPropsType = { // need to fix any
    data: AffairType[]
    filter: FilterType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: string) => void
}

function Affairs(props: AffairsPropsType) {

    const [style, setStyle] = useState('')

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
        setStyle('active all')
    }
    // need to fix
    const setHigh = () => {
        props.setFilter('high')
        setStyle('active high')
    }

    const setMiddle = () => {
        props.setFilter('middle')
        setStyle('active middle')
    }

    const setLow = () => {
        props.setFilter('low')
        setStyle('active low')
    }

    const styleCheckerLow = style === 'active low' ? r.activeFilter : s.nonActiveFilter
    const styleCheckerMiddle = style === 'active middle' ? r.activeFilter : s.nonActiveFilter
    const styleCheckerHigh = style === 'active high' ? r.activeFilter : s.nonActiveFilter
    const styleCheckerAll = style === 'active all' ? r.activeFilter : s.nonActiveFilter

    return (
        <div style={{paddingTop: '10px'}}>
            {mappedAffairs}
            <div className={s.HW8ButtonContainer}>
                <SuperButton className={styleCheckerAll} onClick={setAll}>All</SuperButton>
                <SuperButton className={styleCheckerHigh} onClick={setHigh}>High</SuperButton>
                <SuperButton className={styleCheckerMiddle} onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={styleCheckerLow} onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
