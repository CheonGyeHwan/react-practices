import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';
import PropTypes from 'prop-types';

export default function Emaillist({ emails }) {
    return (
        <ul className={ styles.Emaillist }>
            {
                emails.map(item => <Email key={ item.no } email={ item }/>)
            }
        </ul>
    );
};

Emaillist.propTypes = {
    emails: PropTypes.array.isRequired
    // emails: PropTypes.arrayOf(PropTypes.shape(Email.propTypes)).isRequired
}