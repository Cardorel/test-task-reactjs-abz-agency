import {GET_USERS , FETCH_ERROR , FETCH_REQUEST , POST_USER} from '../Types/types'

let initialState = {
    loading: true,
    data :  [],
    error: '',
    user: {}
}

   const usersReducers = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return{
               ...state,
               loading: true
            }
        case GET_USERS:
            return{
                loading: true,
                data: action.payload,
                error: ''
            }
        case FETCH_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        case POST_USER:
            return{
                ...state,
                user: action.payload
            }
        default:
            return state;
    }

}

export default usersReducers;