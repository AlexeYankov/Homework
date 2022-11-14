import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = e.currentTarget.value.trim()         // need to fix any
        if (trimmedName) {
            setName(trimmedName)
            setError(false)
            // setError(false)
        } else {
            setError(true)
            setName('')

        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
        setName('')
    }
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
            setName('')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting

            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}

        />
    )
}

export default GreetingContainer
