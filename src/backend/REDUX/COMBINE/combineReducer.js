import {combineReducers} from 'redux';
import usersReducers from '../Reducers/usersReducer'
import {countReducer} from '../Reducers/countReducer'
import {tokenReducer} from '../Reducers/tokenReducer'
import {newUSerReducer} from '../Reducers/newUserReducer'




export const CombineReducers = combineReducers(
   {
       users: usersReducers,
       count: countReducer,
       token: tokenReducer,
       newUser: newUSerReducer
   }
)