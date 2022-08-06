import {UserDataType} from "../HW8"

export const homeWorkReducer = (state: UserDataType[], action: ReduceSortCheckType): UserDataType[]=> { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                const sortUp = [...state]
                const sortStater = sortUp.sort((a, b)=>a.name>b.name ? 1 : -1)
                return sortStater
            }
            if (action.payload === 'down') {
                const sortDown = [...state]
                const sortStateDown = sortDown.sort((a, b)=>a.name>b.name ? -1 : 1)
                return sortStateDown
            }
        }
        case 'check': {
            return state.filter(o=>o.age >= action.payload)
        }
        default: return state
    }
}

export type ReduceSortCheckType = SortUpACType | SortDownACType | CheckAgeACType

type  SortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}
type  SortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}
type  CheckAgeACType = ReturnType<typeof checkAgeAC>
export const checkAgeAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}



