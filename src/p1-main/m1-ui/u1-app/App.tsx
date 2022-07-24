import React from 'react';
import s from './App.module.css';
import HW1 from '../../../p2-homeworks/h1/HW1';
import HW2 from '../../../p2-homeworks/h2/HW2';
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW5 from "../../../p2-homeworks/h5/HW5";
import {NavLink, Route, Routes} from "react-router-dom";

function App () {
    return (
        <div className={s.App}>
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <img src="SpacePhoto.jpg" alt={""}/>
            <div>react homeworks:</div>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            <HW5/>
            <Routes>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<div>profile</div>}/>
            </Routes>
        </div>
    )
}

export default App;
