import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../p1-main/m1-ui/u1-app/App.module.css'
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import { AppStoreType } from '../h10/bll/store'
import { changeThemeAC } from './bll/themeReducer'

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

type ThemesValuesType = {
    id: number,
    value: string
}

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const dispatch = useDispatch();
    const themeId: ThemesValuesType | unknown = useSelector<AppStoreType>((state)=>state.theme.themes); // useSelector
    const changeTheme = (el: string) => {
        for (const theme of themes) {
            if (theme.value === el) {
             dispatch(changeThemeAC(theme.id))
             return
            }
            else {}
        };
        
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
        // console.log(document.documentElement.dataset.theme = themeId + '')
    }, [themeId])

    return (
        <div id={'hw12'} >
            
            <div id={'hw12-text'} className={s2.hwTitle}>
            Hometask № 12
            </div>
            <hr/>
            <div className={s2.hw}>
                <p>Выберите тему</p>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes.map((el)=>el.value)}
                    onChangeOption={changeTheme}
                    value={themes.find(el=>el.id === themeId)?.value}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW12
