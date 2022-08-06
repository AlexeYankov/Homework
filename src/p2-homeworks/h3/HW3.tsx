import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any
    const addUserCallback = (name: string) => {
        const user = {
            _id: v1(),
            name,
        }// need to fix any
        setUsers([...users, user])
    }

    return (
        <div>
            <hr/>
            homework 3
            <hr/>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeGreeting/>*!/*/}
        </div>
    )
}

export default HW3
