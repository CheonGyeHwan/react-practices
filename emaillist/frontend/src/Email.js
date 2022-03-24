import React from 'react';
import styles from './assets/scss/Email.scss';
import PropTypes from 'prop-types';

export default function Email({ email }) {
    return (
        <li className={ styles.Email }>
            <h4>{email.firstName + email.lastName}</h4>
            <br/>
            <span>{ email.email }</span>
        </li>  
    );
};

Email.propTypes = {
    email: PropTypes.object.isRequired
};