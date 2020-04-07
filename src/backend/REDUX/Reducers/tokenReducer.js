import {FETCH_TOKEN} from '../Types/types';

export const tokenReducer = (state = '' , action) =>{
    switch (action.type) {
        case FETCH_TOKEN:
         return action.token
        default:
           return  state;
    }
}

