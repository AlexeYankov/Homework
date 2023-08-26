const initState = {
    themeId: 1,
};

export const themeReducer = (state = initState, action: ChangeThemeIdType): {themeId: number} => {
    // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            console.log({themeId: action.id});
            const newObj = Object.assign({},state)
            return {...newObj, themeId: action.id};

        default:
            return state;
    }
};

type ChangeThemeIdType = ReturnType<typeof changeThemeId>;
export const changeThemeId = (id: number) => ({type: "SET_THEME_ID", id} as const); // fix any
