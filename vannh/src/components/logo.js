import React from 'react';
import logo from '../img/logo.png';
import '../style/logo.css';

class logoIcon extends React.Component {
    render() {
        return (
            <div className="logo flex-align">
                <img src={logo}/>
            </div>
        )
    }
}

export default logoIcon;


