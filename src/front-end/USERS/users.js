import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


import '../SCSS/__users.scss';
import { fetchUsers } from '../../backend/REDUX/Actions/UsersAction';
import { setCount } from '../../backend/REDUX/Actions/countAction'

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2)


const Users = ({ Getusers, setcount, count, fetchUsers }) => {
    const [hover, sethover] = useState({});
    
    useEffect(() => {
        fetchUsers(count.countUser);
        setCount();
    }, [count.countUser , fetchUsers]);
    
    

    /*
         *********************it's on of the method to hover something*******************************
                    ***********'...hover ' give the possibility to take all prevent state*******
                        *** [index]: give us the particular key as index is hovered***
    */
    const onMousseEnterHandler = (index) => {
        sethover({ ...hover, [index]: true })
    }

    const onMousseLeaveHandler = (index) => {
        sethover({ ...hover, [index]: false })
    }
    /*****************************************((((())))****************************************/



    return (
        <section id="Users">
            <div className="users__container">
                <div className="__bloc__header__message__users">
                    <h1>Our cheerful users</h1>
                    <p className="warning__message">Attention! Sorting users by registration date</p>
                </div>
                <div className="all__users__container">
                    {
                        Getusers.data.users &&
                        Getusers.data.users
                          .sort((a, b) => a.registration_timestamp > b.registration_timestamp)
                            .map((user, index) => (
                                <div className="__user__content" key={user.id}>
                                    <div className="__user__bloc__all__content">
                                        <img src={user.photo} alt={user.id} />
                                        <h2>{user.name}</h2>
                                        <p className="__user_position">{user.position}</p>
                                        <p className="__user_email__address"
                                            onMouseEnter={() => onMousseEnterHandler(index)}
                                            onMouseLeave={() => onMousseLeaveHandler(index)}
                                        >
                                            {user.email}
                                        </p>
                                        <p className="__user__number__phone">{user.phone}</p>
                                    </div>
                                    <div>
                                        {hover[index] &&
                                            <p className="show__all__user__email__address">{user.email}</p>
                                        }
                                    </div>
                                </div>
                            ))
                    }
                </div>
                <div className="btn__sign__up__users">
                    <button 
                    onClick={setcount}
                    className="__btn__sign__up"
                    >
                        Show more
                        </button>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        Getusers: state.users,
        count: state.count
    }
}



const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: count => dispatch(fetchUsers(count)),
        setcount: () => dispatch(setCount())
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Users);
