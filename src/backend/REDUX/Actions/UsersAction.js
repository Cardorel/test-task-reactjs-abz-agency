import { GET_USERS } from '../Types/types'

export const fetchUsers = () => dispatch => {
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5`)
        .then(res => res.json())
        .then(users => {
            return dispatch({
                type: GET_USERS,
                payload: users
            })
        }
        )
}