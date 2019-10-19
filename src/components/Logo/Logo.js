import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="My Burger"></img>
        </div>
    );
}

export default logo;