import { GET_USERS , FETCH_REQUEST ,FETCH_ERROR} from '../Types/types'

 const fetchRequest = () => {
    return {
        type: FETCH_REQUEST,
    }
}

 const fetchError = error => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

//I prefered to use for the first time ftect and the second time i used axios
export const fetchUsers = (count) => dispatch => { 
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

