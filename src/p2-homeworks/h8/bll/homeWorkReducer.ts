import {UserDataType} from "../HW8"

export const homeWorkReducer = (state: UserDataType[], action: ReduceSortCheckType): UserDataType[]=> { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload.type === 'up') {
                return action.payload.initialPeople.sort((a, b)=>a.name>b.name ? 1 : -1)
            }
            if (action.payload.type === 'down') {
                return action.payload.initialPeople.sort((a, b)=>a.name>b.name ? -1 : 1)
            }
        }
        case 'check': {
            return action.payload.initialPeople.filter(o=>o.age >= action.payload.type)
        }
        default: return state

    }
}

export type ReduceSortCheckType = SortUpACType | SortDownACType | CheckAgeACType

type  SortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = (initialPeople: UserDataType[]) => {
    return {
        type: 'sort',
        payload: {
            type: 'up',
            initialPeople
        }
    } as const
}
type  SortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = (initialPeople: UserDataType[]) => {
    return {
        type: 'sort',
        payload: {
            type: 'down',
            initialPeople
        }
    } as const
}
type  CheckAgeACType = ReturnType<typeof checkAgeAC>
export const checkAgeAC = (initialPeople: UserDataType[]) => {
    return {
        type: 'check',
        payload: {
            type: 18,
            initialPeople
        }
    } as const
}



