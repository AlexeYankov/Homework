import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import EditIcon from '@mui/icons-material/Edit';
import s from "../../p1-main/m1-ui/u1-app/App.module.css";


function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value))
    }

    return (
        <div>
            <hr/>
            homework 6

            <div className={''}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'Please, enter some text...'}}
                />
                <EditIcon/>
            </div>
            <div className={s.HW8ButtonContainer}>
            <span className={s.HW8ButtonStyle}><SuperButton onClick={save} >save</SuperButton></span>
                <span className={s.HW8ButtonStyle}><SuperButton onClick={restore} >restore</SuperButton></span>
            </div>
            <hr/>
        </div>
    )
}

export default HW6
