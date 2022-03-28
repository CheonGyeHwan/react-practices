import React from 'react';
import styles from './assets/css/CardList.css';
import Card from './Card';
import PropTypes from 'prop-types';

export default function CardList({ title, cards }) {
  return (
    <div className={ styles.CardList }>
        <h1>{ title }</h1>
        { cards.map(item => ( <Card key={ item.no } card={ item } /> )) }
    </div>
  );
};

CardList.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
};

CardList.defaultProps = {
  title: "",
  cards: []
}