import {POST_USER} from '../Types/types'

const token = 'sv2rf5rf'

export const createUser = newUSer => dispatch => {
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users` , {
        method: 'POST',
        body: JSON.stringify(newUSer),
        headers: {
            'content-type': 'application/json',
            'Token':  token
        }
    })
    .then(res => res.json())
    .then(user => {
        if(user.success){
            dispatch({
                type: POST_USER,
                payload: user
            })
        }
    })
    /* .catch(error => {
        dispatch({
            //error later
        })
    }) */
}