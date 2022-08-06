import React from 'react'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Route, Routes} from "react-router-dom";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR_MAIN: '/',
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/junior-plus',
    PATHERROR: '/*'
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR_MAIN} element={<PreJunior/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>

                <Route path={PATH.JUNIOR} element={<Junior/>}/>

                <Route path={PATH.JUNIORPLUS} element={<JuniorPlus/>}/>

                <Route path={'/*'} element={<Error404/>}/>
                {/*// add routes*/}

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            </Routes>
        </div>
    )
}

export default Pages
