import React from 'react';
import pict from '../../Image/photo6.jpg.jpg'
import '../SCSS/__users.scss'

const Users = () => {
    return (
        <scroll-page>
            <section id="Users">
                <div className="users__container">
                    <div className="__bloc__header__message__users">
                        <h1>Our cheerful users</h1>
                        <p className="warning__message">Attention! Sorting users by registration date</p>
                    </div>
                    <div className="all__users__container">
                        <div className="__user__content">
                            <div className="__user__bloc__all__content">
                                <img src={pict} alt="" />
                                <h2>Name of the user</h2>
                                <p className="__user_position">Positon</p>
                                <p className="__user_email__address">uservggvgvhgvvghvggcvg@email.com</p>
                                <p className="__user__number__phone">+380634607569</p>
                            </div>
                            <div>
                                <p className="show__all__user__email__address">uservggvgvhgvvghvggcvg@email.com</p>
                            </div>
                        </div>
                        <div className="__user__content">
                            <div className="__user__bloc__all__content">
                                <img src={pict} alt="" />
                                <h2>Name of the user</h2>
                                <p className="__user_position">Positon</p>
                                <p className="__user_email__address">uservggvgvhgvvghvggcvg@email.com</p>
                                <p className="__user__number__phone">+380634607569</p>
                            </div>
                        </div>
                        <div className="__user__content">
                            <div className="__user__bloc__all__content">
                                <img src={pict} alt="" />
                                <h2>Name of the user</h2>
                                <p className="__user_position">Positon</p>
                                <p className="__user_email__address">uservggvgvhgvvghvggcvg@email.com</p>
                                <p className="__user__number__phone">+380634607569</p>
                            </div>
                        </div>
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

export default Users;
