import React, {useState} from 'react'
import {Affairs} from './Affairs'

// types

export type AffairPriority = "high" | "low" | "middle";
export type Affair = { _id: number, name: string, priority: string }
export type Filter = 'all' | AffairPriority

// constants
const defaultAffairs: Affair[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Affair[], filter: Filter): Affair[] => { // need to fix any
    if (filter === 'all') return affairs
    return affairs.filter(({priority}) => priority === filter)

}
export const deleteAffair = (affairs: Affair[], id: number): Affair[] => { // need to fix any
    return affairs.filter(({_id}) => _id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Affair[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<Filter>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
