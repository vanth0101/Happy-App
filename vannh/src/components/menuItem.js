import React from 'react';
import '../style/username.css';

class MenuItem extends React.Component {
    render() {
        return (
            <div className="menuItem flex-align">
                <a>Log In</a>
                <img src={icon} alt='pic' />
            </div>
        )
    }
}

export default MenuItem;


