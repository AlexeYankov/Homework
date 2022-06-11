import React, {useState} from 'react'
import Affairs, {AffairsPropsType} from './Affairs'
import {v1} from "uuid";

// types
export type AffairPriorityType = 'low' | 'middle' | 'high' // need to fix any
export type AffairType = {
    _id: string
    name: string
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: v1(), name: 'React', priority: 'high'},
    {_id: v1(), name: 'anime', priority: 'low'},
    {_id: v1(), name: 'games', priority: 'low'},
    {_id: v1(), name: 'work', priority: 'high'},
    {_id: v1(), name: 'html & css', priority: 'middle'}
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') return affairs
    else return affairs.filter(t => t.priority === filter)
}
export const deleteAffair = (affairs: AffairType[], _id: string): AffairType[] => { // need to fix any
    return affairs.filter(t => t._id !== _id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: string) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                filter={filter}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}

            />
            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeAffairs/>*!/*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW2
