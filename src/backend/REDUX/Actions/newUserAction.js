import {LOADING_USER_FAILURE , LOADING_USER_REQUEST} from '../Types/types'
import axios from 'axios';

//i'm using thunk-middleWare and i have the possibility to return the function in the function!!!
 const userActionSubmitted = (dataOfNewUser , myTokenValue) => dispatch => {
   axios({
        url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
        method: 'POST',
        headers:{
            "Content-Type" : "multipart/form-data",  ///I'm using file and string that it's so import to use multipart and he can choose the content-type himself
            Token:  myTokenValue
        },
        data: dataOfNewUser
    })
    .then(user =>{
        if(user.data.success){
           return dispatch({
                type: LOADING_USER_REQUEST   //I want to dispatch just this request(true).
            })
        }
    })
    .catch(error => {
       return dispatch({
            type: LOADING_USER_FAILURE,  //check for the type
            payload: error.message,   //get the error message
        })
        
    }) 
}


export default userActionSubmitted;