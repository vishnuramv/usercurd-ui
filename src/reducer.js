export const initialState = {
    users: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                users: action.users,
            }

        default:
            return state;
    }
};

export default reducer;