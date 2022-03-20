import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {User} from "./HW3";

type Props = {
    usersCount: number
    users: User[] // need to fix any
    addUserCallback: (name: string) => void; // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<Props> = ({users, addUserCallback, usersCount}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.trim() === "") {
            setError("name is required!")
        } else {
            Boolean(error) && setError("")// need to fix any
            setName(e.currentTarget.value.trim())
        }


    }
    const addUser = () => {
        if (name === "") {
            setError("name is required!")
        } else {
            Boolean(error) && setError("")
            alert(`Hello ${name}  !`)
            addUserCallback(name)

        }// need to fix
    }



    // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={usersCount}
        />
    )
}

export default GreetingContainer
