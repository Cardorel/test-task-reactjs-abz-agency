import {combineReducers} from 'redux';
import usersReducers from '../Reducers/usersReducer'
import {countReducer} from '../Reducers/countReducer'
import {tokenReducer} from '../Reducers/tokenReducer'
import {newUSerReducer} from '../Reducers/newUserReducer'
import {usersPositionReducer} from '../Reducers/usersPositionReducer'



export const CombineReducers = combineReducers(
   {
       users: usersReducers,
       count: countReducer,
       token: tokenReducer,
       newUser: newUSerReducer,
       position: usersPositionReducer
   }
)