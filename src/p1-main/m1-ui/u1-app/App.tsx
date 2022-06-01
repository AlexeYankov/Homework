import React from 'react';
import s from './App.module.css';
// import  from "../../p1-main/m1-ui/u1-app/App"
import HW1, {tasks} from '../../../p2-homeworks/h1/HW1';
import HW2 from '../../../p2-homeworks/h2/HW2';
import HW3 from "../../../p2-homeworks/h3/HW3";




function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            <HW1
                tasks={tasks}
            />
            <HW2
            />
            <HW3/>
            {/*<HW4/>*/}
            {/*<HW5/>*/}
        </div>
    )
}

export default App;
