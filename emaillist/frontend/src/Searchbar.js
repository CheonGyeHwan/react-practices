import React from 'react';
import styles from './assets/scss/Searchbar.scss';
import PropTypes from 'prop-types';

export default function Searchbar({ callback }) {
  return (
    <div className={ styles.Searchbar }>
      <input 
        type='text'
        placeholder='찾기'
        onChange={ e => callback(e.target.value) }
      />
    </div>
  );
};

Searchbar.propTypes = {
  callback: PropTypes.func.isRequired
};