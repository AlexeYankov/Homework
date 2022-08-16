const a = false
const initState = a



export const loadingReducer = (state = initState, action: reduceACType): any => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return (!state)
        }
        default: return state
    }
}


type reduceACType = loadingACType
type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = () => {
    return {
        type: 'LOADING',
    } as const
} // fix any