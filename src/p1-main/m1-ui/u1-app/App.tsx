import React, {useState} from 'react';
import s from './App.module.css';
import HW5 from "../../../p2-homeworks/h5/HW5";
import {NavLink, Route, Routes} from "react-router-dom";
import BurgerLogo from './angles-right-solid.svg';

function App() {
    const [navigation, setNavigation] = useState<string>('')
    const navigationStyle = navigation === 'active' ? s.routsBarActive : s.routs
    const navigationButton = () => {
        if (navigation === 'active') {
            setNavigation('')
        } else {
            setNavigation('active')
        }
    }
    const menuBarText = navigation === 'active' ? s.menuBarTextActive : s.menuBarText

    return (
        <div className={s.App}>
            <div className={s.routsBarTop}>
                <label htmlFor="Foo" className={s.menuButtonLabel}>
                    <button style={{display: 'none'}} id={'Foo'} onClick={navigationButton}/>
                    <img src={BurgerLogo} alt="#" className={s.imgScale}/><span id={'Foo'} className={menuBarText}>Click to show all Pages</span>
                </label>

                <div className={navigationStyle}>
                    <NavLink to={'/'} className={({isActive}) => isActive ? s.routsTitleActiveNavBar : ''}><span
                        className={s.routsTitle}>Home</span></NavLink>
                    <NavLink to={'/pre-junior'}
                             className={({isActive}) => isActive ? s.routsTitleActiveNavBar : ''}><span
                        className={s.routsTitle}>Pre-Junior</span></NavLink>
                    <NavLink to={'/junior'} className={({isActive}) => isActive ? s.routsTitleActiveNavBar : ''}><span
                        className={s.routsTitle}>Junior</span></NavLink>
                    <NavLink to={'/junior-plus'}
                             className={({isActive}) => isActive ? s.routsTitleActiveNavBar : ''}><span
                        className={s.routsTitle}>Junior+</span></NavLink>
                </div>
            </div>

            <HW5/>
            {/* <Routes>
                <Route path={'/*'} element={''}/>
                <Route path={'/'} element={''}/>
                <Route path={'/pre-junior'} element={''}/>
                <Route path={'/junior'} element={''}/>
                <Route path={'/junior-plus'} element={''}/>
            </Routes> */}
        </div>
    )
}

export default App;
