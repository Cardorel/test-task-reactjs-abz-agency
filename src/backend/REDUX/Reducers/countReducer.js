import { INCREMENT_USER } from "../Types/types"

const initialState = {
    countUser: 5,
}

export const countReducer = (state = initialState  , action) => {
    switch (action.type) {
        case INCREMENT_USER:
            return {
                ...state,
                countUser: state.countUser + action.payload
            }
        default:
            return state;
    }
}