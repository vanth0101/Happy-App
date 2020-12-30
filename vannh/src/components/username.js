import React from 'react';
import icon from '../img/accountIcon.png';
import '../style/username.css';

class AccountIcon extends React.Component {
    render() {
        return (
            <div className="account flex-align">
                <a>Log In</a>
                <img src={icon} alt='pic' />
            </div>
        )
    }
}

export default AccountIcon;


