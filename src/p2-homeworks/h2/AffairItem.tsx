import React from 'react'
import {Affair} from "./HW2";

type Props = {
    // key не нужно типизировать
    affair: Affair
    deleteAffairCallback: (id: number) => void
}

export function AffairItem({affair,deleteAffairCallback}: Props) {
    const deleteCallback = () => {
        deleteAffairCallback(affair._id)
    }// need to fix

    return (
        <div>
            {affair.name} - {affair.priority}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}


