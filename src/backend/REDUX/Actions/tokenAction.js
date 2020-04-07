import axios from 'axios'
import {FETCH_TOKEN} from '../Types/types'

export const getToken = () => dispatch => {
    return axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
    .then(res => {
          dispatch({
              type: FETCH_TOKEN,
              token: res.data.token
          })
    })
}