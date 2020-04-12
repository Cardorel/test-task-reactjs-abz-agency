import {LOADING_POSITION_REQUEST , LOADING_POSITION_FAILURE , LOADING_POSITION_SUCCESS} from '../Types/types'

const initState = {
    request: true,
    usersPositions: [],
    error: ''
}

export const usersPositionReducer = (state = initState , action) =>{

    switch (action.type) {
        case LOADING_POSITION_REQUEST:
            return{
                ...state,
                request: true,
            }
        case LOADING_POSITION_SUCCESS:
            return{
                request: true,
                usersPositions: action.payload,
                error: ''
            }
        case LOADING_POSITION_FAILURE:
            return{
                request: false,
                usersPositions: [],
                error: action.payload,
            }
        default:
            return state;
    }
}