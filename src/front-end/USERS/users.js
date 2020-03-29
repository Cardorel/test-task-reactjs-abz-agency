import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
//import pict from '../../Image/photo6.jpg.jpg';
import '../SCSS/__users.scss';
//import { fetchdata } from '../../backend/LOAD/load'

import {fetchUsers} from '../../backend/REDUX/Actions/UsersAction';
import {setCount} from '../../backend/REDUX/Actions/countAction'
 

const Users = ({users , setCount , count , fetchUsers}) => {
    //const [data, setdata] = useState([]);
    const [hover, sethover] = useState({});



     useEffect(() => {
        fetchUsers();
        setCount(3);
    }, []); 

    console.log(users);
    console.log(count);
    

    
    

    /*
         *********************it's on of the method to hover something*******************************
                    ***********'...hover ' give the possibility to take all prevent state*******
                        *** [index]: give us the particular key as index is hovered***
    */
    const onMousseEnterHandler = (index) => {
           sethover({...hover , [index]: true})
    }

    const onMousseLeaveHandler = (index) => {
        sethover({...hover , [index]: false})
    }
           /***************************************** ////****************************************/
    
   
    return (
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
    );
}

 const mapStateToProps = state => {
    return {
        users: state.users,
        count: state.count
    }
}



 const mapDispatchToProps = dispatch => {
    return {
        fetchUsers : () => dispatch(fetchUsers()),
        setCount: number => dispatch(setCount(number))
    }
    
}
  


export default connect(mapStateToProps , mapDispatchToProps)(Users);
