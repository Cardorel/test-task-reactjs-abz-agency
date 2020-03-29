import {GET_USERS} from '../Types/types'

let initialState = {
    data :  [],
}

export const usersReducers = (state = [] , action) => {
    switch (action.type) {
        case GET_USERS:
            return[
                ...state,
                action.payload
            ]
    
        default:
            return state;
    }

}