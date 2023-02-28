type InitialStateType = {
    themes: string
}

const initState = {
    themes: "dark"
};

export const themeReducer = (state = initState, action: SetAppThemeActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "change-themes": {
            return {...state, themes: action.el}
        }
        default: return state;
    }
};

export type SetAppThemeActionType = ReturnType<typeof changeThemeC>

export const changeThemeC = (el: string) => {
    return {
        type: "change-themes",
        el
    } as const
}; // fix any