import React, {useReducer, useState} from 'react'
import s from '../../p1-main/m1-ui/u1-app/App.module.css'
import {checkAgeAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import r from '../h4/common/c2-SuperButton/SuperButton.module.css'

export type UserDataType = {
    _id: number,
    name: string,
    age: number
}

let initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [styleState, setStyle] = useState('')
    const [people, dispatchPeople] = useReducer(homeWorkReducer, initialPeople) // need to fix any
    const finalPeople = people.map((p: UserDataType) => (
        <div key={p._id}>
            <span className={s.HW8Name}>{p.name}</span>
            <span className={s.HW8Age}>{p.age}</span>
        </div>
    ))

    const sortUp = () => {
        dispatchPeople(sortUpAC())
        setStyle('sort Up')
    }
    const sortDown = () => {
        dispatchPeople(sortDownAC())
        setStyle('sort Down')
    }
    const checkOnAge = () => {
        dispatchPeople(checkAgeAC())
        setStyle('sort Age')
    }

    const styleCheckerSortUp = styleState === 'sort Up' ? r.activeFilter : ''
    const styleCheckerSortDown = styleState === 'sort Down' ? r.activeFilter : ''
    const styleCheckerSortAge = styleState === 'sort Age' ? r.activeFilter : ''

    return (
        <div>
            homework 8

            {/*should work (должно работать)*/}
            <div className={s.HW8}>
                <div className={s.HW8Name}>
                    <span className={s.HW8NameStyle}>Name</span>
                </div>
                <div className={s.HW8Age}>
                    <span className={s.HW8NameStyle}>Age</span>
                </div>

                {finalPeople}
            </div>
            <div className={s.HW8ButtonContainer}>
            <SuperButton className={styleCheckerSortUp} onClick={sortUp}>sort Up</SuperButton>
            <SuperButton className={styleCheckerSortDown} onClick={sortDown}>sort Down</SuperButton>
            <SuperButton className={styleCheckerSortAge} onClick={checkOnAge}>Check Age more 18</SuperButton>
            </div>
            <hr/>
        </div>
    )
}


export default HW8
