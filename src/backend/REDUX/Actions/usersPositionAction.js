import axios from 'axios';

import {LOADING_POSITION_FAILURE , LOADING_POSITION_REQUEST , LOADING_POSITION_SUCCESS} from '../Types/types';


export const fetchUserPosition = () => dispatch =>{
    dispatch({
        type: LOADING_POSITION_REQUEST,
    })
    axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
    .then(position =>{
       return dispatch({
             type: LOADING_POSITION_SUCCESS,
             payload: position.data,
        })
    }).catch(error => dispatch({
        type: LOADING_POSITION_FAILURE,
        payload: error.message.userPosition
    }))
}