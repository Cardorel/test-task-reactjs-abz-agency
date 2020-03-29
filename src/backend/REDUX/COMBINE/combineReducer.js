import {combineReducers} from 'redux';
import {usersReducers} from '../Reducers/usersReducer'
import {countReducer} from '../Reducers/countReducer'
export const CombineReducers = combineReducers(
   {
       users: usersReducers,
       count: countReducer
   }
)