import React from 'react'
import {Affair, Filter} from './HW2'
import {AffairItem} from "./AffairItem";

type Props = { // need to fix any
    data: Affair[]
    setFilter:  React.Dispatch<React.SetStateAction<Filter>>
    deleteAffairCallback: (id:number) => void
}

export function Affairs(props: Props):JSX.Element {


    const setMiddle = () => {
        props.setFilter("middle")

    }
    const setLow = () => {
        props.setFilter("low")

    }

    const onClickHandler = (priority:Filter) =>()=>{
        props.setFilter(priority)
    }


    return (
        <div>

            {props.data.map((a: Affair) => (
                <AffairItem // should work
                    key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                    affair={a}
                    deleteAffairCallback={props.deleteAffairCallback}
                />
            ))}



            <button onClick={onClickHandler("all")}>All</button>
            <button onClick={() => props.setFilter("high")}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

