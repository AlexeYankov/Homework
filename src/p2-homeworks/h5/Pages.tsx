import React from "react";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Route, Routes} from "react-router-dom";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Layout from "./Layout";

export const PATH = {
    PRE_JUNIOR_MAIN: "/",
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    JUNIORPLUS: "/junior-plus",
    PATHERROR: "/*",
    // add paths
} as const;

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                    <Route index element={<PreJunior />} />
                    <Route path={PATH.PRE_JUNIOR_MAIN} element={<PreJunior />} />

                    <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />

                    <Route path={PATH.JUNIOR} element={<Junior />} />

                    <Route path={PATH.JUNIORPLUS} element={<JuniorPlus />} />

                    <Route path={"/*"} element={<Error404 />} />
                    {/*// add routes*/}

                    {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                </Route>
            </Routes>
        </div>
    );
}

export default Pages;
