import { GET_USERS} from '../Types/types'
import {fetchError , fetchRequest} from '../Actions/AnothersActions'

export const fetchUsers = (count) => dispatch => {
    console.log(count);
    
    dispatch(fetchRequest)
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`)
        .then(res => res.json())
        .then(users => {
            return dispatch({
                type: GET_USERS,
                payload: users
            })
        }
    ).catch(err => {
        dispatch(fetchError(err))
    })
}