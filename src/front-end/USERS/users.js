import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import pict from '../../Image/photo6.jpg.jpg';
import '../SCSS/__users.scss';
//import { fetchdata } from '../../backend/LOAD/load'

import {fetchUsers} from '../../backend/REDUX/Actions/UsersAction';


const Users = (props) => {
    //const [data, setdata] = useState([]);
    const [hover, sethover] = useState({});

    console.log(props);
    

    useEffect(() => {
        props.dispatch1();
    }, []);

    console.log(props.users);
    

    /*
     LOAD DATA WITH ASYNC AWAIT BUT IT'S NOT NOT NECESSARY BECAUSE I WILL USE REDUX!!!!!!!!!!!
     BUT I WANT TO KEEP IT JUST  )))))

    useEffect(() => {
        fetchdata(setdata);
    }, [])

    const { users } = data;
*/

    /*
    @here it's on of the method to hover something
       ...hover give the possibility to take all prevent state
       [index]: give us the particular key as index is hovered
    */
    const onMousseEnterHandler = (index) => {
           sethover({...hover , [index]: true})
    }

    const onMousseLeaveHandler = (index) => {
        sethover({...hover , [index]: false})
    }

    
   
    return (
        <scroll-page>
            <section id="Users">
                <div className="users__container">
                    <div className="__bloc__header__message__users">
                        <h1>Our cheerful users</h1>
                        <p className="warning__message">Attention! Sorting users by registration date</p>
                    </div>
                    <div className="all__users__container">
                       
                    </div>
                    <div className="btn__sign__up__users">
                        <button className="__btn__sign__up">
                            Show more
                        </button>
                    </div>
                </div>
            </section>
        </scroll-page>
    );
}

 const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(fetchUsers)
        }
    }
}
 
export default connect(mapStateToProps , mapDispatchToProps)(Users);
