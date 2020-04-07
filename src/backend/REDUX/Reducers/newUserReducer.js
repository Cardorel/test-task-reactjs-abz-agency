import {LOADING_USER_FAILURE , LOADING_USER_REQUEST} from '../Types/types'

//my initialstate int the store
const initialState = {
  loadingUserRequest: true,
  loadingUserFailure : ''
}

export const newUSerReducer = (state= initialState , action) => {

    switch (action.type) {
      case LOADING_USER_REQUEST:
        return{
          ...state,
          loadingUserRequest: true
        }
        case LOADING_USER_FAILURE:
          return {
            loadingUserRequest: false,
            loadingUserFailure: action.payload

          }
        default:
            return state;
    }
}
