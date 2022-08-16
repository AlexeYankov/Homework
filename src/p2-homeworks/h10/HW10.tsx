import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from "./bll/loading.module.css"

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading)


    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC())
        const b = () => dispatch(loadingAC())
        setTimeout(b, 2000)
    };
    return (
        <div>
            homework 10

            {loading
                ? (
                    <div>
                        <div className={s.center}>
                            <div className={s.ring}>
                            </div>
                            <span className={s.span1}>loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className={s.buttons}>
                        <SuperButton onClick={setLoading} >set loading...</SuperButton>
                    </div>
                )
            }

        </div>
    )
}

export default HW10
