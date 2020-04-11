import React, { useState, useEffect } from 'react';
//import propTypes from 'prop-types';
import { connect } from 'react-redux';


import '../SCSS/__users.scss';
import { fetchUsers } from '../../backend/REDUX/Actions/UsersAction';
import { setCount } from '../../backend/REDUX/Actions/countAction'


const Users = ({ Getusers, setcount, count, fetchUsers }) => {
    //state for the hover when the user hover the email and
    const [hover, sethover] = useState({});
    //when the componentDidupdate i want to fetch all users
    useEffect(() => {
        fetchUsers(count.countUser);
    }, [count.countUser, fetchUsers]);



    /*
         *********************it's on of the method to hover something*******************************
                    ***********'...hover ' give the possibility to take all prevent state*******
                        *** [index]: give us the particular key as index is hovered***
    */
    //Looking for each index when the mousse Enter.Take all state(hover) and put the current index true
    const onMousseEnterHandler = (index) => {
        sethover({ ...hover, [index]: true })
    }
    //Looking for each index when the mousse leave.Take all state(hover) and put the current index false
    const onMousseLeaveHandler = (index) => {
        sethover({ ...hover, [index]: false })
    }
    /*****************************************((((())))****************************************/

    return (
        <scroll-page id="Users" tabIndex={-1}>
            <div className="All__containers__for__users">
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
            </div>
        </scroll-page>
    );
}

//mapStateToprops => give the posssibility to take our data in the store and put them in the current component like the props
//Hooks => useSelector();
const mapStateToProps = state => {
    return {
        Getusers: state.users,
        count: state.count
    }
}

//mapDispatch => dispatch the data in the props; we can use the Hooks too Like useDisptach();
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: count => dispatch(fetchUsers(count)),
        setcount: () => dispatch(setCount())
    }

}
/* 
Users.propTypes = {
    setCount: propTypes.func.isRequired,
    fetchUsers: propTypes.func.isRequired,
    Getusers: propTypes.array.isRequired,
    count: propTypes.number.isRequired,
    onMousseEnterHandler: propTypes.func.isRequired,
}
 */
//connect => connect us to the store;
export default connect(mapStateToProps, mapDispatchToProps)(Users);
