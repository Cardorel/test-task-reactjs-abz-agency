import {FETCH_REQUEST , FETCH_ERROR} from '../Types/types'


export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST,
    }
}

export const fetchError = error => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}