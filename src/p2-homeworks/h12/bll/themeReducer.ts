export type ThemeType = {
    themes: number
}

const initState: ThemeType = {
    themes: 3
};

export const themeReducer = (state = initState, action: SetAppThemeActionType): ThemeType => { // fix any
    switch (action.type) {
        case "change-themes": {
            return {...state, themes: action.el}
        }
        default: return state;
    }
};

export type SetAppThemeActionType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (el: number) => {
    return {
        type: "change-themes",
        el
    } as const
}; // fix any
